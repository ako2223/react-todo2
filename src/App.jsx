import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactGA from "react-ga";
import { useLocation } from "react-router-dom";
ReactGA.initialize("G-9GRDLNBR2R");

function App() {
  const [value2, setValue] = useState("");
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
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

  const handlerFuntion = () => {
    console.log("enter press here! ");
  };

  useEffect(() => {
    getTasks();
    console.log("value");
    console.log(value2);
  }, []);

  useEffect(() => {
    console.log("value");
    console.log(value2);
    if (value2 !== "") {
      axios
        .post("http://localhost:8000/todos", {
          name: value2,
          completed: false,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      window.location.reload(false);
    }
  }, [value2]);

  return (
    <div className="App">
      <img
        className="img"
        src="https://cdn.shopify.com/s/files/1/0603/3745/5243/files/1._Various_coloured_crayons_standing_upwards_with_purple_labels..jpg?v=1679538490"
        alt="crayons"
      />
      <h1>toTooooDoooos</h1>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setValue(e.target.value);
          }
        }}
        type="text"
        placeholder="What to do today?"
      />
      <TaskList taskProps={tasks} />
    </div>
  );
}

export default App;
