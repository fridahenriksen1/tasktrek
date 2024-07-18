import React from "react";

const Createtodo = () => {
  let tasks = 0;

  const handleClick = () => {
    tasks++;
    console.log("Add Task", tasks);
  };

  return (
    <>
      <h1>Tasks: {tasks} </h1>
      <button onClick={handleClick} value="Add Task Button"> 
        Add Task
      </button>
    </>
  );
};

export default Createtodo;
