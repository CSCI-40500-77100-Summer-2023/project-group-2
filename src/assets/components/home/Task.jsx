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

/* functional component called "Task" using arrow function syntax in JavaScript.
  The component takes in several props as parameters: taskName, taskDescription, 
  note, deadline, and remindMe.

Inside the component, it initializes a variable called "reminder" with the value 'Yes'. 
It then checks if the value of the prop remindMe is not equal to 'on'. 
If the condition is true, it updates the value of the "reminder" variable to 'No'.

The component returns a JSX (JavaScript XML) template that renders the task details. 
It includes an h1 element displaying the taskName, and several p elements displaying the taskDescription, 
note, deadline, and the value of the "reminder" variable (which indicates whether there is a reminder or not).
*/