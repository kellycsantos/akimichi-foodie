import './Card.css'

type TCard = {
    variant : string;
    title ?: string;
    description ?: string
}
export default function Card({variant, title, description} : TCard){
    return(
        <div className={`card ${variant}`}>
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
        </div>
    )
}