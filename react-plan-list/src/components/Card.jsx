import { useState } from 'react'
function Card({ id, name, info, image, price,removeTour }) {
    const [readmore, setReadmore] = useState(false);
    const discription = readmore ? info:`${info.substring(0, 200)}...`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }
    
    return <>
        <div className="card">
            <img src={image} alt="an Image" className="image" />

            <div className="card-info">

                {/* tours details */}
                <div className="tour-details">
                    <h4 className="tour-price">Rs {price}</h4>
                    <h4 className="tour-name">{name} </h4>
                </div>

                {/* tours discription */}
                <div className="discription">
                    {discription}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less`:`read more`}
                    </span>
                </div>

            </div>


            {/* intrusted button */}
            <button className="btn-red" onClick={()=> removeTour(id)} >
                Not Interested
            </button>

        </div>

    
    </>
}

export default Card;