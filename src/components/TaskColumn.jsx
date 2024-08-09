import React from "react";
// import Todo from "../assets/direct-hit.png";

import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = (props) => {
  //   const { title, icon } = props;
  return (
    <section className="task_Column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={props.icon} alt="" />
        {props.title}
      </h2>
      <TaskCard />
    </section>
  );
};

export default TaskColumn;
