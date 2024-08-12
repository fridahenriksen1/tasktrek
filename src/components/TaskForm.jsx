import React, { useState } from "react";

import "./TaskForm.css";
import "./Tag.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    // Denna funktionen kollar igenom propities och sen namn och ersätter med value
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(taskData);
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("to do");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };
  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  // console.log(task, status);
  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          name="task"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>

          <div>
            <select
              name="status"
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
