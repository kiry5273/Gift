import { Link } from 'react-router-dom';
import '../css/HomePage.css';
import arrow from '../image/arrow.png'

function HomePage(){
    return(
        <div className="homepage">
            <div className="text">
                <div>K & D</div>
                <div>2nd Anniversary ♥</div>       
            </div>
            <Link to="/calendar">
                <img id="arrow" src={arrow} />
            </Link>
        </div>
    );
};

export default HomePage;