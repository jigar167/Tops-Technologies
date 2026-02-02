const TaskItem = ({ task, onDelete }) => {
  return (
    <li style={{ marginBottom: "8px" }}>
      <span>{task.title}</span>
      <button
        style={{ marginLeft: "10px" }}
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
