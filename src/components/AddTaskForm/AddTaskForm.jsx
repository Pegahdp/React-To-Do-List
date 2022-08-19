import "./AddTaskForm.css";
import { useState } from "react";
const AddTaskFrom = ({ addTask }) => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (e) e.preventDefault();
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value || value === ''){
      return
    }
    addTask(value);
  };
  console.log(value)

  return (
    <div className="AddTaskFrom">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done?"
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTaskFrom;
