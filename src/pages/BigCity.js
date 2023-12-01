import '../css/BigCity.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import arrow from '../image/arrow_black.png';
import backArrow from '../image/back_arrow_black.png';
import camera from '../image/camera_click.png';
import bigcity1 from'../image/bigcity1.JPG';
import bigcity2 from'../image/bigcity2.JPG';
import bigcity3 from'../image/bigcity3.JPG';
import bigcity4 from'../image/bigcity4.JPG';
import bigcity5 from'../image/bigcity5.jpg';


function BigCity(){
    const [count, setCount] = useState(-1);
    const handleClick = () =>{
        if(count>=imageArray.length-1){
            setCount(0);
        }
        else{
            setCount(count+1);
        }
    }

    const imageArray=[bigcity1, bigcity2, bigcity3, bigcity4, bigcity5];

    var content=<img id="big-city" src={imageArray[count]} />;
    if(count==-1){
        content=<div className="bigcity-content"></div>
    }
    

    return(
        <div className='big-city'>
            <div className='instruction'>
                <div>Take a photo for your girlfriend!</div>
                <img id="camera" onClick={handleClick} src={camera} />
            </div>
            <div className='bigcity-container'>
                <Link to="/ramen">
                    <img className="page-arrow" src={backArrow} />
                </Link>
                {content}
                <Link to="/night_view">
                    <img className="page-arrow" src={arrow} /> 
                </Link>
            </div>
        </div>
    );
};

export default BigCity;