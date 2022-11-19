import { StyledTransaction, Value } from "./StylesTransaction.js"

export default function Transaction(props) {
    const { value, description, type,date } = props

    return (
        <StyledTransaction>
            <p><span>{date}</span>{description}</p>
            <Value colored={type}>{value.toFixed(2).replace(".",',')}</Value>
        </StyledTransaction>
    )
}