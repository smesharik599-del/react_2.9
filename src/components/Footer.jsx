import TasksFilter from "./TasksFilter";

function Footer({ tasks }) {
  const activeCount = tasks.filter((task) => !task.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>

      <TasksFilter />

      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Footer;
