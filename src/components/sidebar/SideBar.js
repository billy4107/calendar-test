import React from 'react'
import CreateEventButton from './CreateEventButton'
import "./SideBar.css"
import SmallCalendar from './SmallCalendar'

const SideBar = () => {
  return (
    <aside className='px-3'>
      <CreateEventButton />
      <SmallCalendar />
      </aside>
  )
}

export default SideBar