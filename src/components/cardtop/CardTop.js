import React, { useContext } from 'react'
import "./CardTop.css"
import * as bs from "react-icons/bs";
import GlobalContext from '../../context/GlobalContext';
import dayjs from 'dayjs';

const CardTop = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1);
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1);
    }

    return (
        <div className="card cardtop">
            <div className="card-body">
                <span className="btn btn-sm" onClick={handlePrevMonth} ><h4><bs.BsChevronLeft /></h4></span>
            </div>
            <div className="card-body text-center">
                <p className="fs-3">{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}</p>
            </div>
            <div className="card-body text-end">
                <span className="btn btn-sm" onClick={handleNextMonth} ><h4><bs.BsChevronRight /></h4></span>
            </div>
        </div>
    )
}

export default CardTop