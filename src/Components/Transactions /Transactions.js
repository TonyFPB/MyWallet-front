import { StyledTransactions, Header, StyledTransactionsInfos, EmptyTransactions, Buttons, Total } from './StylesTransactions.js';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { IoExitOutline } from "react-icons/io5"
import Transaction from './Transaction.js';
import { useNavigate, Link } from "react-router-dom"
import { useOperationTypeProvider } from '../../Providers/OperationTypeProvider.js';
import { useEffect, useState } from 'react';
import { useAuthProvider } from '../../Providers/AuthProvider.js';
import { useUserProvider } from '../../Providers/UserProvider.js';
import axios from 'axios';

export default function Transactions() {
    const [userTransactions, setUserTransactions] = useState([])
    const [userTotal, setUserTotal] = useState(0)
    const { setType } = useOperationTypeProvider()
    const { token, setToken } = useAuthProvider()
    const { nameUser, setNameUser } = useUserProvider()
    const navigate = useNavigate()

    function nextPage(operationType) {
        setType(operationType)
        navigate("/operacao")
    }
    function logginOut() {
        const confirm = window.confirm("Tem cereteza que deseja sair?")
        if (confirm) {
            setToken('')
            setNameUser('Fulano')
            setUserTransactions([])
            setUserTotal(0)
            navigate('/')
        }
    }
    useEffect(() => {
        const URL = "https://mywallet-api-msb8.onrender.com/transactions"
        const config = {
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        }
        axios.get(URL, config)
            .then(res => {
                setUserTransactions(res.data.transactions)
                let newTotal = 0
                res.data.transactions.forEach(t => {
                    if (t.type === "deposit") {
                        newTotal += t.value

                    } else {
                        newTotal -= t.value

                    }

                })
                setUserTotal(newTotal)
            })
            .catch(err => console.log(err))
    }, [])
    if (token === '') {
        return (
            <StyledTransactions>

                <Header>
                    <Link to="/">
                        <h1>Voce nao esta mais logado, voltar para a pagina de login?</h1>
                    </Link>
                </Header>


            </StyledTransactions>
        )
    }

    return (
        <StyledTransactions>
            <Header>
                <p>Ola, {nameUser}</p>
                <IoExitOutline onClick={logginOut} size={'30px'} color={"#FFFFFF"} />
            </Header>
            {
                userTransactions.length !== 0 ?
                    <>
                        <StyledTransactionsInfos>
                            {userTransactions.map(t =>
                                <Transaction
                                    key={t._id}
                                    value={t.value}
                                    description={t.description}
                                    type={t.type}
                                    date={t.date}
                                />
                            )}

                        </StyledTransactionsInfos>
                        <Total pColor={userTotal}><p>SALDO</p><span>{userTotal.toFixed(2).replace(".", ',')}</span></Total>
                    </>
                    :
                    <StyledTransactionsInfos>
                        <EmptyTransactions>Não há registros de entrada ou saída</EmptyTransactions>
                    </StyledTransactionsInfos>
            }

            <Buttons>
                <div onClick={() => nextPage("deposit")}><AiOutlinePlusCircle size={"30px"} /><p>Nova entrada</p></div>
                <div onClick={() => nextPage("withdraw")}><AiOutlineMinusCircle size={"30px"} /><p>Nova saída</p></div>
            </Buttons>
        </StyledTransactions >
    )
}

