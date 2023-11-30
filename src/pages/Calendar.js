import NavBar from "./NavBar";
import TimeLineView from "./TimeLineView";
import arrow from '../image/arrow_black.png';
import '../css/Calendar.css';
import { Link } from 'react-router-dom';

function Calendar(){
    return(
        <div className="content">
            <NavBar />
            <TimeLineView />
            <div id="arrow-container">
                <Link to="/ramen">
                    <img src={arrow}  id="arrow-calendar" />
                </Link>
            </div>
            
        </div>
    );
};

export default Calendar;