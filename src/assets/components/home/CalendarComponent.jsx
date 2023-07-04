import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Task from './Task';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

        // Validate input fields
        if (!data.taskName) {
            createNotification("warning", "Task Name is required");
            return;
        }
        if (!data.taskDescription) {
            createNotification("warning", "Task Description is required");
            return;
        }
        if (!data.note) {
            createNotification("warning", "Note is required");
            return;
        }
        if (!data.deadline) {
            createNotification("warning", "Deadline is required");
            return;
        }

        // Add object to info array
        if (info.has(data.deadline)) {
            // Add to existing array
            const temp = info.get(data.deadline);
            temp.push(data);
            info.set(data.deadline, temp);
        } else {
            // Create new array
            info.set(data.deadline, [data]);
        }

        // Reset form
        e.target.reset();
        createNotification("success", "Form submitted successfully!");
        checkDeadline(new Date(data.deadline));
    }

    // Check if date is close to deadline, then create notification
    // Check if date is close to deadline, then create notification
    const checkDeadline = (deadlineDate) => {
        // Get today's date
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Get date from calendar
        const calendarDate = new Date(deadlineDate);
        calendarDate.setHours(0, 0, 0, 0);

        // Get date 3 days before deadline
        const threeDaysBeforeDeadline = new Date(calendarDate);
        threeDaysBeforeDeadline.setDate(threeDaysBeforeDeadline.getDate() - 3);
        threeDaysBeforeDeadline.setHours(0, 0, 0, 0);

        // Get date 1 day before deadline
        const oneDayBeforeDeadline = new Date(calendarDate);
        oneDayBeforeDeadline.setDate(oneDayBeforeDeadline.getDate() - 1);
        oneDayBeforeDeadline.setHours(0, 0, 0, 0);

        // Create notification if today's date is 3 days before deadline
        if (today >= threeDaysBeforeDeadline && today < oneDayBeforeDeadline) {
            createNotification("warning", "3 days before deadline!");
        }

        // Create notification if today's date is 1 day before deadline
        if (today >= oneDayBeforeDeadline && today < calendarDate) {
            createNotification("warning", "1 day before deadline!");
        }

        // Create notification if today's date is deadline
        if (today >= calendarDate) {
            createNotification("info", "Deadline!");
        }
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

    // Create Notification
    const createNotification = (type, message) => {
        switch (type) {
            case "info":
                toast.info(message);
                break;
            case "success":
                toast.success(message);
                break;
            case "warning":
                toast.warn(message);
                break;
            case "error":
                toast.error(message);
                break;
        }
    }

    return (
        <>
            <div class="content">
                <Calendar onChange={onChange} value={value} onClickDay={calendarClickHandler} />
            </div>
            <div className='task-form'>
                <form onSubmit={formSubmitHandler}>
                    <label>Task Name</label>
                    <input type="text" name="taskName" placeholder='Job Interview' />
                    <label>Task Description</label>
                    <input type="text" name="taskDescription" placeholder='Study' />
                    <label>Note</label>
                    <input type="text" name="note" placeholder='Need to pass' />
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
                        <Task key={index} taskName={task.taskName} taskDescription={task.taskDescription} note={task.note} deadline={task.deadline} remindMe={task.remindMe} />
                    )
                }
                ) : null
                
            }
            </div>
            <ToastContainer />
        </>
    )
}

export default CalendarComponent