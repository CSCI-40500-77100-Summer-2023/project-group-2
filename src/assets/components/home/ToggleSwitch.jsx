import React, { useState } from 'react';
import CalendarComponent from './CalendarComponent';

const ToggleSwitch = () => {
    const [isChecked, setIsChecked] = useState(false)

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
            </div>
        ) : (
        // Content for the second side of the switch
            <div>
                <h1>Calendar View</h1>
                <CalendarComponent/>
            </div>
        )}
    </div>
  )
}

export default ToggleSwitch;