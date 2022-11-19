import styled from "styled-components"

export const StyledTransactions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 25px;
    font-family: 'Raleway';
    font-style: normal; 
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    p{
        font-size: 26px;
        color:#FFFFFF;
    }
    h1{
        margin: auto;
        font-size: 26px;
        color:#000000
    }
    a{
        text-decoration: none;
    }
`
export const StyledTransactionsInfos = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 446px;
    margin: 26px 0px 0px 0px;
    background: #FFFFFF;
    border-radius:5px 5px 0 0;
    overflow-y: scroll;
`
export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        width: 145px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        padding: 10px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        p{
            width: 65px;
            word-wrap: break-word;
        }
    }
`
export const EmptyTransactions = styled.h1`
    margin: auto;
    font-weight: 400;
    font-size: 20px;
    color: #868686;
`

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 13px 0;
    border-radius: 0 0 5px 5px;
    width: 100%;
    padding: 0 10px;
    height: 25px;
    background-color: #FFFFFF;
    font-size: 17px;
    span{
        color:${props => props.pColor > 0 ? "green" : "red"}
    }
    p{
        font-weight: 700;
    }
      
`