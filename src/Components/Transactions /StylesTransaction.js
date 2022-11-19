import styled from "styled-components";

export const StyledTransaction = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    margin: 15px 0;
    font-size: 16px;
    span{
        font-weight: 400;
        color: #C6C6C6;
        margin-right: 10px;
    }
`
export const Value = styled.p`
    color:${props=>props.colored === "deposit"?"green":"red"}
`