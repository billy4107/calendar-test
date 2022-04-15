import "./Navbar.css"
import pic1 from "../../assets/pic1.png";
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';
import React, { useContext } from 'react'

const NavBar = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    const handleReset = () => {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    }

    return (
        <nav className="navbar navbartop navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img src={pic1} alt="calendar" className="pic1 me-4" />


                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button className="btn btn-primary" onClick={handleReset}>
                            Today
                        </button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default NavBar