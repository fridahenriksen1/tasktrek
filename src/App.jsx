import React from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn />
        <section className="task_Column">Section 1</section>
        <section className="task_Column">Section 2</section>
        <section className="task_Column">Section 3</section>
      </main>
    </div>
  );
};

export default App;
