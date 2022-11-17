import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuthProvider } from "../../Providers/AuthProvider"
import { StyledFormSign, StyledSign, Tittle } from "./StyledSign"
export default function SignIn() {
    const { setToken } = useAuthProvider()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()

    function logginOn(e) {
        e.preventDefault()

        if (email !== "" && password !== "") {
            const URL = "http://localhost:5000/sign-in"
            const body = { email, password }
            const request = axios.post(URL, body)
            request.then(res => {setToken(res.data.token); setError(''); navigate("/transacoes")})
            request.catch(err=>{console.log(err.response);setError("Email ou senha incorretos!")})
        }
    }


    return (
        <StyledSign>
            <Tittle>My Wallet</Tittle>
            <StyledFormSign onSubmit={logginOn}>
                <input
                    placeholder="E-mail"
                    value={email}
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    placeholder="Senha"
                    value={password}
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button>Logar</button>
            </StyledFormSign>
            <p>{error}</p>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </StyledSign>
    )
}