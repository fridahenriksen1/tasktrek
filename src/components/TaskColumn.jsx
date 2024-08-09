import React from "react";
import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";

const TaskColumn = (props) => {
  return (
    <section className="task_Column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={Todo} alt="" />
        {props.title}
      </h2>
    </section>
  );
};

export default TaskColumn;
