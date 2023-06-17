import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Task from './Task';
const CalendarComponent = () => {
    const [value, onChange] = useState(new Date().toISOString().substring(0, 10));
    const [selectedTask, setSelectedTask] = useState(null);
    const [info, setInfo] = useState(new Map());

    const formSubmitHandler = (e) => {
        // Prevent reload
        e.preventDefault();
        // Get form data
        const formData = new FormData(e.target);
        // Create object from form data
        const data = Object.fromEntries(formData);
        // Add object to info array
        if(info.has(data.deadline)) {
            // Add to existing array
            const temp = info.get(data.deadline);
            temp.push(data);
            info.set(data.deadline, temp);
        }
        else {
            // Create new array
            info.set(data.deadline, [data]);
        }
        // Reset form
        e.target.reset();
    }

    const calendarClickHandler = (e) => {
        // Get date clicked on calendar
        const date = e.toISOString().substring(0, 10);
        // If info array has data for the date clicked, set selectedTask to the data
        if (info.has(date)) {
            setSelectedTask(info.get(date));
        }
        // If info array does not have data for the date clicked, set selectedTask to null
        else {
            setSelectedTask(null);
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
                    <label>Remind Me</label>
                    <input type="checkbox" name="remindMe" />
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
