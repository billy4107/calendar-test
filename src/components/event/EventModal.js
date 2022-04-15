import React, { useContext, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GlobalContext from '../../context/GlobalContext';
import * as ai from "react-icons/ai";
import * as md from "react-icons/md";
import * as bi from "react-icons/bi";

const labelsClasses = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info"
];

const EventModal = () => {
    const { showEventModal, setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)

    const [fullscreen] = useState(true);
    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : "");
    const [start, setStart] = useState(selectedEvent ? selectedEvent.start : "");
    const [end, setEnd] = useState(selectedEvent ? selectedEvent.end : "");
    const [locations, setLocations] = useState(selectedEvent ? selectedEvent.locations : "");
    const [comper, setComper] = useState(selectedEvent ? selectedEvent.comper : "");
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            start,
            end,
            locations,
            comper,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        };

        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }

        setShowEventModal(false);
    }

    const labelsClasse = labelsClasses.map((lblClass, i) => {
        return <option key={i} value={lblClass} onClick={() => setSelectedLabel(lblClass)} className={`bg-${lblClass}`}>{lblClass}</option>;
    });
    return (
        <Modal show={showEventModal} fullscreen={fullscreen} centered>
            <Modal.Header closeButton onHide={() => setShowEventModal(false)}>
                {/* <Modal.Title>Modal title</Modal.Title> */}
            </Modal.Header>

            <Modal.Body>
                <form>
                    <h2 className="mt-2">Form-input</h2>
                    <hr />
                    <div className="row mt-5">
                        <div className="col-6">
                            <div className="form-group mb-3">
                                <label>Title name</label>
                                <input type="text" className="form-control" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                                <small className="form-text text-muted">ชื่อนัดหมาย หรือ กำหนดการ</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Time</label>
                                <div className="input-group">
                                    <input type="time" className="form-control" placeholder="start" value={start} onChange={(e) => setStart(e.target.value)} />
                                    <input type="time" className="form-control" placeholder="end" value={end} onChange={(e) => setEnd(e.target.value)} />
                                </div>
                                <small className="form-text text-muted">{daySelected.format("dddd, MMMM DD")}</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Locations</label>
                                <input type="text" className="form-control" placeholder="locations" value={locations} onChange={(e) => setLocations(e.target.value)} />
                                <small className="form-text text-muted">สถานที่นัดหมาย</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Company or Person</label>
                                <input type="text" className="form-control" placeholder="company or person" value={comper} onChange={(e) => setComper(e.target.value)} />
                                <small className="form-text text-muted">ชื่อบริษัท หรือ ชื่อบุคคล</small>
                            </div>

                            <div className="form-group mb-3">
                                <label>Color</label>
                                <select className="form-select">
                                    <option>...</option>
                                    {labelsClasse}
                                </select>
                                <small className="form-text text-muted">เลือกสีของการนัดหมาย</small>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group mb-3">
                                <label>Description</label>
                                <textarea type="text" className="form-control" rows="8" placeholder="description"
                                    value={description} onChange={(e) => setDescription(e.target.value)} />
                            </div>
                            <small className="form-text text-muted">รายละเอียด</small>
                        </div>
                    </div>
                    <hr />
                    <p className="text-danger">*กรอกรายละเอียดกำหนดการเพื่อความชัดเจน</p>
                </form>
            </Modal.Body>

            {/* <span
                                        key={i}
                                     onClick={() => setSelectedLabel(lblClass)}
                                        className={`bg-${lblClass} rounded-circle m-1`}>

                                        <span className="btn text-white align-middle text-sm" />
                                 </span> */}

            <Modal.Footer>
                <Button variant="primary" onClick={handleSubmit}>Save</Button>
                {selectedEvent && (
                    <Button variant="danger" onClick={() => {
                        dispatchCalEvent({
                            type: "delete",
                            payload: selectedEvent,
                        });
                        setShowEventModal(false);
                    }}>Delete</Button>
                )}
            </Modal.Footer>
        </Modal>
    );

}



export default EventModal