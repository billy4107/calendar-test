import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import GlobalContext from '../../context/GlobalContext';
import "./Day.css"

const Day = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState([])
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent, showDesModal, setShowDesModal } = useContext(GlobalContext);
  const [showMore, setShowMore] = useState(false);
  // const numberOfItems = showMore ? dayEvents.length : 3;

  useEffect(() => {
    const events = savedEvents.filter((evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY"));
    setDayEvents(events);
  }, [savedEvents, day])

  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-primary text-white font-weight-bold"
      : "";
  }

  const showViewDetails = () => {
    return <Modal show={showDesModal} centered>
      <Modal.Header closeButton onHide={() => setShowDesModal(false)}>
        More
      </Modal.Header>

      <Modal.Body>
        {dayEvents
          .map((evt, idx) => (
            <div key={idx} className={`bg-${evt.label} rounded m-1`} onClick={() => {
              setSelectedEvent(evt);
              setShowEventModal(true);
            }}>
              <b className="text-white p-1">{evt.title}</b>
            </div>
          ))}
      </Modal.Body>

    </Modal>
  }

  return (
    <div className="border border-gray d-flex flex-column p-0 high">
      <div>
        <header className="d-flex flex-column text-center" onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}>
          {rowIdx === 0 && (
            <p className="m-1">{day.format("ddd").toUpperCase()}</p>
          )}
          <p className={`p-1 my-1 ${getCurrentDayClass()}`}>{day.format("DD")}</p>
        </header>
        <div className="h-100">
          {dayEvents
            .slice(0, 3)
            .map((evt, idx) => (
              <span key={idx} onClick={() => {
                setSelectedEvent(evt);
                setDaySelected(day);
                setShowEventModal(true);
              }} className={`btn bg-${evt.label} item rounded p-0 text-white`} >
                <b>({evt.title})</b>
              </span>
            ))}

          {dayEvents.length >= 3 ?
            <span
              onClick={() => setShowMore(!showMore)}
            >
              {showMore === true ?
                // <Modal show={showDesModal} centered>
                //   <Modal.Header closeButton onClick={() => setShowDesModal(false)}>
                //   </Modal.Header>

                //   <Modal.Body>
                //     {dayEvents
                //       .map((evt, idx) => (
                //         <div key={idx} className={`bg-${evt.label} rounded m-1`}>
                //           <p>{evt.title}</p>
                //           <p>{evt.description}</p>
                //         </div>
                //       ))}
                //   </Modal.Body>

                // </Modal>
                showViewDetails()
                : <div className="m-1" onClick={() => { setShowDesModal(true) }}><b>+ more</b></div>
              }
            </span>
            : ""
          }
        </div>
      </div>
    </div>
  )
}

export default Day