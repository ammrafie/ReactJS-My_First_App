import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => {
        onToggle(task.id);
      }}
    >
      <h3>
        <p className="taskText">{task.text}</p>
        <FaTimes
          style={{ color: "crimson", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p className="taskTime">{task.day}</p>
    </div>
  );
};

export default Task;
