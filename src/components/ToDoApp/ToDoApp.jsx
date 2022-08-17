import AddTaskFrom from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";


const ToDoApp = () => {
  return (
    <div className="ToDoApp">
      <AddTaskFrom />
      <TaskList />
      <FilterFooter />
    </div>
  );
};

export default ToDoApp;
