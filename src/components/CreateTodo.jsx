import React from "react";

const Createtodo = () => {
  const tasks = 0;
  const hideButton = True;
  const countTasks = () => {
    // if (tasks === 0) {
    //   return "No tasks available";
    // } else {
    //   return `Tasks: ${tasks}`;
    // }
    return tasks === 0 ? "No tasks available" : `Tasks: ${tasks}`;
  };
  return (
    <>
      <h1>{countTasks()} </h1>
      <button disabled={hideButton} value="Add Task Button">
        Add Task
      </button>
    </>
  );
};

export default Createtodo;
