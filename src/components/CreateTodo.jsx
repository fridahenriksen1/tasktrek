import React from "react";

const Createtodo = () => {
  const tasks = 0;
  const hideButton = false;
  const styles = {
    backgroundColor: "red",
  };
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
      <h1 style={styles}>{countTasks()} </h1>
      <button className="btn" disabled={hideButton} value="Add Task Button">
        Add Task
      </button>
    </>
  );
};

export default Createtodo;
