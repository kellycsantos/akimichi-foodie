import './Rating.css'
type TRating = {
    rate?: number,
    rateTotal?: number,
}

interface IRating {
    id: number;
    active: boolean
}
const rating: IRating[] = [
    {
        id: 0,
        active: true
    },
    {
        id: 1,
        active: true
    },
    {
        id: 2,
        active: false
    },
    {
        id: 3,
        active: false
    },
    {
        id: 4,
        active: false
    },
]
export default function Rating() {
    return (
        <>
            <ul className="rating-container">

                {
                    rating.map((item, index) => {
                        return <li key={index}>
                            {<span className={item.active ? 'active' : 'inactive'}>&#9733;</span> }
                        </li>
                    })
                }
            </ul>
        </>



    )
}