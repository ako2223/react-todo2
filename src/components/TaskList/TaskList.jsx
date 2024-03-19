import React from "react";
import "./TaskList.css";
import TaskInstance from "../TaskInstance/TaskInstance";

function TaskList({taskProps}) {
  return <div className="list">
{taskProps.map((task) => (
        <TaskInstance task={task} key={task.id} />
        ))}

  </div>;
}

export default TaskList;
