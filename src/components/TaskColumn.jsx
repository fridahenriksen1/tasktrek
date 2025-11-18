import React from "react";
// import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status }) => {
  return (
    <section className="task_Column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" />
        {title}
      </h2>
      {/* Om det är true så spara så visa, annars visas inget */}
      {tasks.map(
        (task, index) => task.status === status && <TaskCard key={index} />
      )}
    </section>
  );
};

export default TaskColumn;
