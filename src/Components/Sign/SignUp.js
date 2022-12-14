import { useState } from "react"
import { StyledFormSign, StyledSign, Tittle } from "./StylesSign"
import axios from "axios"
import { Link } from "react-router-dom"

export default function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [error, setError] = useState("")

    function registering(e) {
        e.preventDefault()
        const URL = "https://mywallet-api-msb8.onrender.com/sign-up"

        if (password === passwordConfirm) {
            const body = { name, email, password }
            const request = axios.post(URL, body)
            request.then(res => {
                alert(res.data)
                setError("")
                setName("")
                setEmail("")
                setPassword("")
                setPasswordConfirm("")
            })
            request.catch(err=>{setError("Preencha os dados corretamentes")})
        }else{
            setError("Senha incorreta")
        }
    }

    return (
        <StyledSign>
            <Tittle>MyWallet</Tittle>
            <StyledFormSign onSubmit={registering}>
                <input
                    placeholder="Nome"
                    value={name}
                    min={3}
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                    min={6}
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    placeholder="Confirme a senha"
                    value={passwordConfirm}
                    id="passwordConfirm"
                    type="password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    required
                />
                <button>Cadastrar</button>
            </StyledFormSign>
            <p>{error}</p>
            <Link to="/">J?? tem uma conta? Entre agora!</Link>
        </StyledSign>
    )
}

