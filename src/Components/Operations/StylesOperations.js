import styled from "styled-components";

export const StyledOperation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px 24px 0 24px;
    font-family: 'Raleway';
    font-style: normal;
    h1{
        font-weight: 700;
        font-size: 26px;
        color: #FFFFFF;
        
    }
    div{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 0 0 40px 0;
    }
`
export const StyledFormOperation = styled.form`
    /* margin: 0 24px; */
    input{
        width: 100%;
        height: 58px;
        border-radius: 5px;
        font-size: 20px;
        margin: 0 0 13px 0;
        ::placeholder{
            font-size: 20px;
            color: #000000;
        }   
    }
    button{
        width: 100%;
        height: 46px;
        background-color: #A328D6;
        border-radius: 5px;
        font-weight: 700;
        font-size: 20px;
        color: #FFFFFF;
        border-style: none;
    }
`