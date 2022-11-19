import { StyledTransaction, Value } from "./StylesTransaction.js"

export default function Transaction(props) {
    const { value, description, type } = props

    return (
        <StyledTransaction>
            <p><span>30/11 </span>{description}</p>
            <Value colored={type}>{value.toFixed(2).replace(".",',')}</Value>
        </StyledTransaction>
    )
}