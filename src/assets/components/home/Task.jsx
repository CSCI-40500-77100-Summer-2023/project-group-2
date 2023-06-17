const Task = ({ taskName, taskDescription, note, deadline, remindMe }) => {
  let reminder = 'Yes';
  if(remindMe !== 'on') {reminder = 'No'};
    return (
      <div>
        <h1>{taskName}</h1>
        <p>Description: {taskDescription}</p>
        <p>Note: {note}</p>
        <p>Due: {deadline}</p>
        <p>Reminder Me: {reminder}</p>
      </div>
    );
  };

  export default Task;