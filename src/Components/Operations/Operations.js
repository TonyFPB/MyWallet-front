import { useOperationTypeProvider } from "../../Providers/OperationTypeProvider.js"
import { StyledOperation, StyledFormOperation } from "./StylesOperations.js"
import { IoExitOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { useAuthProvider } from "../../Providers/AuthProvider.js"
import { useState } from "react"
import axios from "axios"

export default function Operations() {
    const [value, setValue] = useState('')
    const [description, setDescription] = useState('')
    const { type } = useOperationTypeProvider()
    const { token } = useAuthProvider()
    function sendingOperation(e) {
        e.preventDefault()
        const config = {
            "headers": {
                "Authorization": `Bearer ${token}`
            }
        }
        const body = {
            value: Number(value),
            description,
            type
        }
        const URL = "http://localhost:5000/transactions"
        axios.post(URL, body, config)
            .then(res => { alert(res.data); console.log(res) })
            .catch(err => console.log(err))

    }
    return (
        <StyledOperation onSubmit={sendingOperation}>
            <div>
                <h1>{type === "deposit" ? "Nova entrada" : "Nova Saida"}</h1>
                <Link to="/transacoes"><IoExitOutline size={"30px"} color={"#FFFFFF"} /></Link>
            </div>

            <StyledFormOperation>
                <input
                    id="value"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Valor"
                    type="number"
                    required
                />
                <input
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Descrição"
                    required
                />
                <button>{type === "deposit" ? "Salvar entrada" : "Salvar Saida"}</button>
            </StyledFormOperation>
        </StyledOperation>
    )
}