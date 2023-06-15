import React, { useState } from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = ()  =>{
  const [value, onChange] = useState(new Date());
  const [info, setInfo] = useState([{}]);

  const formSubmitHandler = (e) => {
    // Prevent reload
    e.preventDefault();
    // Get form data
    const formData = new FormData(e.target);
    // Create object from form data
    const data = Object.fromEntries(formData);
    // Set state
    let newInfo = [...info, data];
    setInfo(newInfo);
    // Reset form
    e.target.reset();
  }



  const calendarClickHandler = (e) => {
    console.log(value);
  }

  return (
    <>
      <div>
        <Calendar onChange={onChange} value={value} onClickDay={calendarClickHandler} />
      </div>
      <div>
        <form onSubmit={formSubmitHandler}>
            <label>Task Name</label>
            <input type="text" name="taskName" />
            <label>Task Description</label>
            <input type="text" name="taskDescription" />
            <label>Task Date</label>
            <input type="text" name="taskDate" />
            <label>Note</label>
            <input type="text" name="note" />
            <label>Deadline</label>
            <input type="date" name="deadline" />
            <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default CalendarComponent
