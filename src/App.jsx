import { useState } from "react";
import "./App.css";

import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: 2,
      description: "Active task",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: 3,
      description: "Another active task",
      completed: false,
      createdAt: new Date(),
    },
  ]);

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAddTask={setTasks} />
      </header>

      <section className="main">
        <TaskList tasks={tasks} />
        <Footer tasks={tasks} />
      </section>
    </section>
  );
}

export default App;
