import AddTaskFrom from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
import { useState } from "react";
import "./ToDoApp.css";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      storedTasks = JSON.parse(storedTasks);
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTasks(tasks);
    }

    if (filter === "completed") {
      const completedTasks = tasks.filter((task) => task.status);
      setFilteredTasks(completedTasks);
    }
    if (filter === "active") {
      const activeTasks = tasks.filter((task) => !task.status);
      setFilteredTasks(activeTasks);
    }
  }, [filter, tasks, refresh]);

  const addTask = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        status: false,
      },
    ];
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };
  const handleChangeStatus = (taskId) => {
    let newTasksList = tasks;
    const taskIndex = tasks.findIndex((task) => task.id == taskId);
    newTasksList[taskIndex].status = !newTasksList[taskIndex].status;
    setTasks(newTasksList);
    localStorage.setItem("tasks", JSON.stringify(newTasksList));
    setRefresh(refresh + 1);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="ToDoApp">
      <AddTaskFrom addTask={addTask} />
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        handleChangeStatus={handleChangeStatus}
      />
      <FilterFooter updateFilter={setFilter} tasks={filteredTasks} />
    </div>
  );
};

export default ToDoApp;
