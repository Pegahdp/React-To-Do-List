import './TaskItem.css'
import { FaTrashAlt } from "react-icons/fa";
const TaskItem = ({task,deleteTask,handleChangeStatus}) => {
  return (
    <li className="TaskItem">
      <input onClick={()=> handleChangeStatus(task.id)}type="checkbox" checked={task.status} />
      <h2>{task.title}</h2>
      <button onClick={() => deleteTask(task.id)}><FaTrashAlt /></button>
    </li>
  );
};

export default TaskItem;
