import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);
  const addTask = useCallback(() => {
    setTasks((prevState) => {
      return [...prevState, "some task"];
    });
  }, [setTasks]);
  return (
    <div>
      <Button addTask={addTask} />
      <div>
        {tasks.map((task, index) => (
          <p key={index}>this is task: {task}</p>
        ))}
      </div>
    </div>
  );
}
const Button = React.memo(({ addTask }) => {
  console.log("button rendered");

  return (
    <div>
      <button onClick={addTask}>Add-Task</button>
    </div>
  );
});
export default UseCallbackExample;
