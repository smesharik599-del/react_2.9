function Task({ task }) {
  return (
    <li className={task.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          defaultChecked={task.completed}
        />

        <label>
          <span className="description">{task.description}</span>
        </label>

        <button className="icon icon-destroy" />

        <button className="icon icon-edit" />
      </div>
    </li>
  );
}

export default Task;
