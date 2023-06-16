import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Task from './Task';
const CalendarComponent = () => {
    const [value, onChange] = useState(new Date().toISOString().substring(0, 10));
    const [info, setInfo] = useState([{}]);
    const [selectedTask, setSelectedTask] = useState(null);

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
        // Get date clicked on calendar
        const date = e.toISOString().substring(0, 10);
        // Loop through info array
        for (let i = 0; i < info.length; i++) {
            // Check if date matches
            if (info[i].deadline === String(date)) {
                setSelectedTask([...info], info[i]);
            }
        }
    }

    return (
        <>
            <div>
                <Calendar onChange={onChange} value={value} onClickDay={calendarClickHandler} />
            </div>
            <div className='task-form'>
                <form onSubmit={formSubmitHandler}>
                    <label>Task Name</label>
                    <input type="text" name="taskName" />
                    <label>Task Description</label>
                    <input type="text" name="taskDescription" />
                    <label>Note</label>
                    <input type="text" name="note" />
                    <label>Deadline</label>
                    <input type="date" name="deadline" />
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div>
            {
                // If selectedTask is not null, loop and render Task component
                selectedTask !== null ? selectedTask.map((task, index) => {
                    return (
                        <Task key={index} taskName={task.taskName} taskDescription={task.taskDescription} note={task.note} deadline={task.deadline} />
                    )
                }
                ) : null
                
            }
            </div>
        </>
    )
}

export default CalendarComponent
