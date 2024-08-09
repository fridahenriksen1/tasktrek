import React from "react";
import Todo from "../assets/direct-hit.png";

const TaskColumn = () => {
  console.log(Todo);
  return (
    <section className="task_Column">
      <h2>
        <img src={Todo} alt="" />
        To do
      </h2>
    </section>
  );
};

export default TaskColumn;
