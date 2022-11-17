import styled from "styled-components"

const StyledSign = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    a{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFFFFF;
        margin-top: 32px;
        text-decoration: none;
    }
    p{
        color: red;
        margin-top: 10px;
        font-size: 20px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
    }
`
const Tittle = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 24px;
    color: #FFFFFF;
`
const StyledFormSign = styled.form`
    width: 90%;
    margin: 0px 24px 0px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    input{
        width: 100%;
        height: 58px;
        background: #FFFFFF;
        border-radius: 5px;
        margin: 5px 0px 5px 0px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        ::placeholder{
            color: #000000;
            font-family: 'Raleway';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
        }
    }
    button{
        background-color: #A328D6;
        width: 100%;
        height: 46px;
        border-radius: 5px;
        border-style: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        margin-top: 8px;
    }
`

export { StyledSign, Tittle, StyledFormSign }