import arrow from '../image/arrow_black.png';
import backArrow from '../image/back_arrow_black.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/NightView.css';
import scooter from '../image/scooter.png';
import summerCafe from '../image/summerCafe.png';
import nightview1 from '../image/nightview1.JPG';
import nightview2 from '../image/nightview2.JPG';
import nightview3 from '../image/nightview3.JPG';
import nightview4 from '../image/nightview4.JPG';
import nightview5 from '../image/nightview5.JPG';
import nightview6 from '../image/nightview6.JPG';
import nightview7 from '../image/nightview7.JPG';
import nightview8 from '../image/nightview8.JPG';

function NightView(){
    const [count, setCount] = useState(0);
    const [ishover, setHover] = useState(false);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () =>{
        setHover(true);
    };

    const handleClick=() =>{
        if(count>=imageArray.length-1){
            setCount(0);
        }
        else{
            setCount(count+1);
        }
    };

    var content=(
        <div>
            <img onMouseMove={handleMouseMove} id="scooter" src={scooter} style={{ left: `${position.x-100}px`, top: `${position.y-100}px` }}/>
            <div onMouseEnter={handleMouseEnter} id="drag-zone"></div>
            <img id="night-view" src={summerCafe} />
        </div>    
    );

    const imageArray=[nightview1, nightview2, nightview3, nightview4, nightview5, nightview6, nightview7, nightview8];

    if(ishover){
        content=<img id="nightview-img" src={imageArray[count]} onClick={handleClick} />
    }

    return(
        <div className='night-view' >
            <div draggable="true" className='instruction'>Bring us to the top of the mountain!</div>
            <div className='nightview-container'>
                <Link to="/big_city">
                    <img className="page-arrow" src={backArrow} />
                </Link>
                {content}
                <Link to="/calendar2">
                    <img className="page-arrow" src={arrow} /> 
                </Link>
            </div>
        </div>
    );
};

export default NightView;