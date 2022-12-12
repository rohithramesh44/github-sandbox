import { useState } from "react";
import Todo from "./Todo";

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);
  return (
    <div>
      <div className="container">
        {showTodo && <Todo />}
        {!showTodo && <p>Todo Not available</p>}
        <button class="btn btn-primary" onClick={() => setShowTodo(!showTodo)}>
          Toggle ToDo
        </button>
      </div>
    </div>
  );
}

export default UseRefExample3;
