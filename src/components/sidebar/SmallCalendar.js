import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { getMonth } from '../../util';
import * as bs from "react-icons/bs";
import GlobalContext from '../../context/GlobalContext';
import "./SmallCalendar.css"

const SmallCalendar = () => {
    const [currenMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currenMonth, setCurrentMonth] = useState(getMonth());

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currenMonthIdx - 1);
    }
    const handleNextMonth = () => {
        setCurrentMonthIdx(currenMonthIdx + 1);
    }

    const { monthIndex, setSmallCalendarMonth, daySelected, setDaySelected } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex])

    useEffect(() => {
        setCurrentMonth(getMonth(currenMonthIdx))
    }, [currenMonthIdx])

    const getDayClass = (day) => {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return "btn-primary";
        } else if (currDay === slcDay) {
            return "btn-secondary"
        } else {
            return "";
        }
    }
    return (
        <div>
            <div className="header pt-4">
                <div className="card-body p-0">
                    <span className="btn btn-sm" onClick={handlePrevMonth}><bs.BsChevronLeft /></span>
                </div>
                <div className="card-body text-center center p-0">
                    <p className="m-1">{dayjs(new Date(dayjs().year(), currenMonthIdx)).format("MMMM YYYY")}</p>
                </div>
                <div className="card-body p-0">
                    <span className="btn btn-sm" onClick={handleNextMonth}><bs.BsChevronRight /></span>
                </div>
            </div>
            <div className="d-flex row row-cols-7 text-center">
                {currenMonth[0].map((day, i) => (
                    <span key={i} className="text-sm py-1 col">
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currenMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <span key={idx} onClick={() => {
                                setSmallCalendarMonth(currenMonthIdx);
                                setDaySelected(day)
                            }}
                                className={`text-sm py-1 p-0 col radius-small btn ${getDayClass(day)}`}>
                                {day.format("D")}
                            </span>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SmallCalendar