import { useState } from "react";

function Card({id,image,info,price,name,removeTour}){

    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....` /*info 200 character tkk aaega uske baad ....Read more ka option aaega
                                                 readmode true hai iska mtlb readmore pe click hua pda hai to usme poora info dedo wrna 200 character dikhao*/

    function readmoreHandler(){
        setReadmore(!readmore); /*switch lr rhe h handler ko...click krne pe agr true h to false ho jao and vice-versa*/
    }

    return(
        <div className="card">
            <img src={image} className="image"></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`:`Read More`}
                    </span>
                </div>
            </div>
            
            <button className="btn-red" onClick={ () => removeTour(id)}> {/*onClick ko map kr diye remove tour waale function se with help of arrow function*/}
                Not Interested
            </button>
        </div>
        
    );
}

export default Card;