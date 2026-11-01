function TasksFilter() {
  const filters = ["All", "Active", "Completed"];

  return (
    <ul className="filters">
      {filters.map((item) => (
        <li key={item}>
          <button className={item === "All" ? "selected" : ""}>{item}</button>
        </li>
      ))}
    </ul>
  );
}

export default TasksFilter;
