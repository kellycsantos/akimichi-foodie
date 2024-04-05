import './Rating.css'
type TRating = {
    rate: number,
    rateTotal: number,
}


export default function Rating({rate, rateTotal} : TRating) {
    return (
        <>
            <ul className="rating-container">
                {
                    Array.from({length: rateTotal}).map((_, index) => {
                        return <li key={index}>
                            {<span className={index < rate ? 'active' : 'inactive'}>&#9733;</span> }
                        </li>
                    })
                }
            </ul>
        </>
    )
}