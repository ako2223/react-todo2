import React from "react";
import "./TaskInstance.css";

function TaskInstance({task}) {
  return <div className="taskInstance">
{task.completed === true ? (
        <div className="task">
<input type="checkbox" defaultChecked name={task.name} id={task.id} />
          <p>{task.name}</p>
        </div>
      ) : (
        <div className="task">
        <input type="checkbox" name={task.name} id={task.id} />
                  <p>{task.name}</p>
                </div>
      )}

  </div>;
}

export default TaskInstance;
