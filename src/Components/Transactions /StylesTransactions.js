import styled from "styled-components"

export const StyledTransactions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 25px;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    p{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 26px;
        color:#FFFFFF;
    }
`
export const StyledTransactionsInfos = styled.div`
    width: 100%;
    height: 446px;
    margin: 26px 0px 13px 0px;
    background: #FFFFFF;
    border-radius: 5px;
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