import { useState, useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import icon from '../image/icon_color.png';
import '../css/ProgressBar.css';

function NavBar(){
    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = () => {
        // This will calculate how many pixels the page is vertically
        const winScroll = document.documentElement.scrollTop;
        // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
        const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

        // This will calculate the final total of the percentage of how much the user has scrolled.
        const scrolled = (winScroll / height) * 100;

        setScrollTop(scrolled);
    };

    useEffect(() => {
        // Fires when the document view has been scrolled
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="progress-bar">
            <img id="icon" src={icon} style={{left: `${scrollTop-7}%`}}/>
            <div className="progressMainWrapper">
                <div
                className="progressMainStyle"
                style={{ width: `${scrollTop}%` }}
                ></div>
            </div>

        </div>
    );
};

export default NavBar;