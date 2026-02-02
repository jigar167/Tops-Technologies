import { useState } from "react";

const TaskItem = ({ task, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);

  const handleSave = () => {
    onEdit({
      ...task,
      title: updatedTitle
    });
    setIsEdit(false);
  };

  return (
    <li style={{ marginBottom: "10px" }}>
      {isEdit ? (
        <>
          <input
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
