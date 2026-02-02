import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.length === 0 ? (
        <p style={{ textAlign: "center" }}>No tasks added yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
};

export default TaskList;
