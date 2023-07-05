import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Task from './Task';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addDatesToUser } from '../../backend/DatabaseManager';
import { UserAuth } from '../../backend/AuthContext';
const CalendarComponent = ({ info, setInfo }) => {
    const [value, onChange] = useState(new Date().toISOString().substring(0, 10));
    const [selectedTask, setSelectedTask] = useState(null);
    const { user } = UserAuth();

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

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

        if (info.has(data.deadline)) {
            const temp = info.get(data.deadline);
            temp.push(data);
            setInfo(new Map([...info, [data.deadline, temp]]));
        } else {
            setInfo(new Map([...info, [data.deadline, [data]]]));
        }

        e.target.reset();
        createNotification("success", "Form submitted successfully!");
        checkDeadline(new Date(data.deadline));
    }

    const checkDeadline = (deadlineDate) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const calendarDate = new Date(deadlineDate);
        calendarDate.setHours(0, 0, 0, 0);

        const threeDaysBeforeDeadline = new Date(calendarDate);
        threeDaysBeforeDeadline.setDate(threeDaysBeforeDeadline.getDate() - 3);
        threeDaysBeforeDeadline.setHours(0, 0, 0, 0);

        const oneDayBeforeDeadline = new Date(calendarDate);
        oneDayBeforeDeadline.setDate(oneDayBeforeDeadline.getDate() - 1);
        oneDayBeforeDeadline.setHours(0, 0, 0, 0);

        if (today >= threeDaysBeforeDeadline && today < oneDayBeforeDeadline) {
            createNotification("warning", "3 days before deadline!");
        }
        if (today >= oneDayBeforeDeadline && today < calendarDate) {
            createNotification("warning", "1 day before deadline!");
        }
        if (today >= calendarDate) {
            createNotification("info", "Deadline!");
        }
    }

    const calendarClickHandler = (e) => {
        const date = e.toISOString().substring(0, 10);
        if (info.has(date)) {
            setSelectedTask(info.get(date));
        } else {
            setSelectedTask(null);
        }
    }

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
            <div className="content">
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

export default CalendarComponent;
