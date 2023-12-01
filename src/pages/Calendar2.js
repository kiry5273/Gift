import NavBar from "./NavBar";
import TimeLineView2 from "./TimeLineView2";
import arrow from '../image/arrow_black.png';
import '../css/Calendar.css';
import { Link } from 'react-router-dom';

function Calendar2(){
    return(
        <div className="content">
            <NavBar />
            <TimeLineView2 />
            <div id="arrow-container">
                <Link to="/ramen">
                    <img src={arrow}  id="arrow-calendar" />
                </Link>
            </div>
            
        </div>
    );
};

export default Calendar2;