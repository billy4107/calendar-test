import React, { useContext } from 'react'
import * as ai from "react-icons/ai";
import GlobalContext from '../../context/GlobalContext';
import "./CreateEventButton.css";

const CreateEventButton = () => {
    const { setShowEventModal } = useContext(GlobalContext)
    return (
        <div
            onClick={() => setShowEventModal(true)}
            className="pb-2">
            <button type="button" className="btn btn-outline-primary radius btn-lg">
                <ai.AiOutlinePlus /> Create
            </button>
        </div>
    )
}

export default CreateEventButton