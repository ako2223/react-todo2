import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:8000/todos");
    const data2 = await response.data;
    console.log(data2);
    const data = Array.from(data2);
    setTasks(data);
    console.log(data);
    console.log(tasks);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <img
        className="img"
        src="https://cdn.shopify.com/s/files/1/0603/3745/5243/files/1._Various_coloured_crayons_standing_upwards_with_purple_labels..jpg?v=1679538490"
        alt="crayons"
      />
      <h1>toTooooDoooos</h1>
      <input type="text" />
      <TaskList taskProps={tasks} />
    </div>
  );
}

export default App;
