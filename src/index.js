import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const ToDoList = () => {
  const AddedTask = document.getElementById("addedTask");

  const task = () => console.log(AddedTask.value);
  return (
    <div>
      <h1>TODO-LIST</h1>

      <input
        type="text"
        className="TaskAdedd"
        id="addedTask"
        placeholder="Input Your task here"
      />
      <button onClick={task}>SUBMIT</button>

      <ul>
        <li>
          <button>X</button>Task 1<button>DONE</button>
        </li>
        <li>
          <button>X</button>Task 2<button>DONE</button>
        </li>
        <li>
          <button>X</button>Task 3<button>DONE</button>
        </li>
      </ul>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ToDoList />);
