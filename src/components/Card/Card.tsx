import './Card.css'
import Button from '../Button/Button'
import Rating from '../Rating/Rating'

type TCard = {
    variant: string;
    icon?: string
    title?: string;
    description?: string;
    productCard?: boolean ;
    starValue?:  number ;
    rateTotal?: number;
    valuePlate?: string
}
export default function Card({ variant, icon, title,valuePlate , description, productCard, starValue, rateTotal }: TCard) {
    return (
        <div className={`card ${variant}`}>
            <img src={icon} alt='nu' />
            {!productCard
                ? <>
                    <h4 className='title'>{title}</h4>
                    <p className='description'>{description}</p>
                </>

                :
                <div className='product-content'>
                    <div className='principal-info'><h4 className='title'>{title}</h4>
                        <span>{valuePlate}$</span>
                    </div>
                    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae?</p>
                    <div className='footer-card'>
                        <Rating rate={starValue ? starValue : 0} rateTotal={rateTotal ? rateTotal : 0}/>
                        <Button variant='buy'/>
                    </div>
                </div>

            }
        </div>
    )
}