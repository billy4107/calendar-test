import React from 'react';
import Day from '../day/Day';

const Mouth = ({ month }) => {
  return (
    <div className="row row-cols-7 w-100">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}

export default Mouth