import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await axios.get("http://localhost:8000/todos");
    const data = await response.data;
    setTasks(data);
    console.log(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="App">
      <img
        className="img"
        src="https://cdn.shopify.com/s/files/1/0603/3745/5243/files/1._Various_coloured_crayons_standing_upwards_with_purple_labels..jpg?v=1679538490"
        alt=""
      />
      <h1>toTooooDoooos</h1>
      <input type="text" />
      <TaskList />
    </div>
  );
}

export default App;
