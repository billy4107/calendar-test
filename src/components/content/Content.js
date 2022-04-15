import "./Content.css";
import { getMonth } from "../../util";
import React, { useState, useContext, useEffect } from "react";
import Month from "../month/Month";
import GlobalContext from "../../context/GlobalContext";
import SideBar from "../sidebar/SideBar";
import EventModal from "../event/EventModal";

const Content = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    console.log(getMonth())
    return (
        <React.Fragment>
            {showEventModal && <EventModal />}
            <div className="d-flex flex-column bg-white">
                <div className="d-flex m-0">
                    <div className="p-2"><SideBar /></div>
                    <div className="p-2 w-100"><Month month={currenMonth} /></div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Content