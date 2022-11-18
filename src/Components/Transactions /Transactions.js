import { StyledTransactions, Header, StyledTransactionsInfos, Buttons } from './StylesTransactions.js';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { IoExitOutline } from "react-icons/io5"


export default function Transactions() {
    return (
        <StyledTransactions>
            <Header>
                <p>Ola, Fulano</p>
                <IoExitOutline size={'30px'} color={"#FFFFFF"} />
            </Header>
            <StyledTransactionsInfos>
                
            </StyledTransactionsInfos>
            <Buttons>
                <div><AiOutlinePlusCircle size={"30px"} /><p>Nova entrada</p></div>
                <div><AiOutlineMinusCircle size={"30px"} /><p>Nova saída</p></div>
            </Buttons>
        </StyledTransactions>
    )
}

