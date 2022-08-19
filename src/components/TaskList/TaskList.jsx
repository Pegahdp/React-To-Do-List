import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";
const TaskList = ({ tasks, deleteTask, handleChangeStatus }) => {
  return (
    <div className="TaskList">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={`Task-${task.id}`}
            task={task}
            deleteTask={deleteTask}
            handleChangeStatus={handleChangeStatus}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
