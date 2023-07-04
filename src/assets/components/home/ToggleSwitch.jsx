import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';
import Task from './Task';

const ToggleSwitch = () => {
    const [info, setInfo] = useState(new Map());
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked((prevChecked) => !prevChecked)
    }

    return (
        <div>
            <input type="checkbox" id="switch" className="checkbox" checked={isChecked} onChange={handleToggle} />
            <label htmlFor="switch" className={`toggle ${isChecked ? 'checked' : ''}`}></label>

            <div>
                <h1>TaskFlow</h1>
            </div>

            {isChecked ? (
                // Content for the first side of the switch
                <div>
                    <h1>List View</h1>
                    <div>
                        {Array.from(info.entries()).map(([deadline, tasks]) => (
                            <div key={deadline}>
                                <h2>{deadline}</h2>
                                {tasks.map((task, index) => (
                                    <div key={index}>
                                    <Task taskName={task.taskName} taskDescription={task.taskDescription} note={task.note} deadline={task.deadline} remindMe={task.remindMe} />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // Content for the second side of the switch
                <div>
                    <h1>Calendar View</h1>
                    <CalendarComponent info={info} setInfo={setInfo} />
                </div>
            )}
        </div>
    );
};

export default ToggleSwitch;
