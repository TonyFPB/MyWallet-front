import { StyledTransactions, Header, StyledTransactionsInfos, Buttons, Total } from './StylesTransactions.js';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { IoExitOutline } from "react-icons/io5"
import Transaction from './Transaction.js';
import { useNavigate } from "react-router-dom"
import { useOperationTypeProvider } from '../../Providers/OperationTypeProvider.js';
import { useEffect, useState } from 'react';
import { useAuthProvider } from '../../Providers/AuthProvider.js';
import axios from 'axios';

export default function Transactions() {
    const [userTransactions, setUserTransactions] = useState([])
    const [userTotal, setUserTotal] = useState(0)
    const { setType } = useOperationTypeProvider()
    const { token } = useAuthProvider()
    const navigate = useNavigate()
    console.log(userTransactions)

    function nextPage(operationType) {
        setType(operationType)
        navigate("/entrada")
    }
    useEffect(() => {
        const URL = "http://localhost:5000/transactions"
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
                        newTotal -=t.value

                    }

                })
                setUserTotal(newTotal)
            })
            .catch(err => console.log(err.response))
    }, [])

    return (
        <StyledTransactions>
            <Header>
                <p>Ola, Fulano</p>
                <IoExitOutline size={'30px'} color={"#FFFFFF"} />
            </Header>
            <StyledTransactionsInfos>
                {userTransactions && userTransactions.map(t =>
                    <Transaction
                        key={t._id}
                        value={t.value}
                        description={t.description}
                        type={t.type} />
                )}
                <Total pColor={userTotal}><p>SALDO</p><span>{userTotal.toFixed(2).replace(".",',')}</span></Total>
            </StyledTransactionsInfos>
            <Buttons>
                <div onClick={() => nextPage("deposit")}><AiOutlinePlusCircle size={"30px"} /><p>Nova entrada</p></div>
                <div onClick={() => nextPage("withdraw")}><AiOutlineMinusCircle size={"30px"} /><p>Nova saída</p></div>
            </Buttons>
        </StyledTransactions >
    )
}

