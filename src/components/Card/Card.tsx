import './Card.css'

type TCard = {
    variant : string;
    icon?: string
    title ?: string;
    description ?: string;
}
export default function Card({variant,icon, title, description} : TCard){
    return(
        <div className={`card ${variant}`}>
            <img src={icon} alt='nu'/>
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
        </div>
    )
}