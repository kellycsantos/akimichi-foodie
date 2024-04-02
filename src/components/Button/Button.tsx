type TProps ={
    variant : string,
    value? : string
}
import './Button.css'
export default function Button({variant, value} : TProps){
    return(
        <button className={variant}>{value}</button>
    )
}