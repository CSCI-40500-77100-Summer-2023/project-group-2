const Task = ({ taskName, taskDescription, note, deadline }) => {
    return (
      <div>
        <h1>{taskName}</h1>
        <p>Description: {taskDescription}</p>
        <p>Note: {note}</p>
        <p>Due: {deadline}</p>
      </div>
    );
  };

  export default Task;