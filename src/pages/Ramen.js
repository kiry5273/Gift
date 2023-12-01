import ramen1 from '../image/ramen1.png';
import ramen2 from '../image/ramen2.png';
import ramen3 from '../image/ramen3.png';
import ramen4 from '../image/ramen4.png';
import ramen5 from '../image/ramen5.jpg';
import ramen6 from '../image/ramen6.jpeg';
import ramen7 from '../image/ramen7.jpg';
import arrow from '../image/arrow_black.png';
import backArrow from '../image/back_arrow_black.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/Ramen.css';

function Ramen(){
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        if(count>=imageArray.length-1){
            setCount(0);
        }
        else{
            setCount(count+1);
        }
    };

    const imageArray = [ramen1, ramen2, ramen3, ramen4, ramen5, ramen6, ramen7];

    const currentImage = imageArray[count];

    return(
        <div className='ramen'>
            <div className='instruction'>Click on Ramen to eat!</div>
            <div className='ramen-container'>
                <Link to="/calendar">
                    <img className="page-arrow" src={backArrow} />
                </Link>
                <img id="ramen" onClick={handleClick} src={currentImage} />
                <Link to="/big_city">
                    <img className="page-arrow" src={arrow} /> 
                </Link>
            </div>
        </div>
        
    );
};

export default Ramen;