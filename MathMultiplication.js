export function Multiplication(props)
{

    let Number1 = props.n1
    let Number2 = props.n2
    let Result = Number1 * Number2

    return(
       <h2>Multiplication of {Number1},{Number2} is  {Result}</h2>
    )
}