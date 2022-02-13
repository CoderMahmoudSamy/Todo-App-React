import React from "react";

const ShowTask = ({ tasks }) => {
  let taskCollection = [];
  let rendredTasks = tasks.map((task) => {
    return <div key={Math.random() * 1000}> {task} </div>;
  });
  if (tasks.length === 0) {
    return <div className="empty"> No tasks to show! </div>;
  }
  let keyNum = 0;
  return (
    <div className="show-task">
      <div className="tasks">
        <div key={keyNum + 1} className="task">
          <input type="checkbox" id="complete" />
          <label forhtml="" className="task-name">
            {rendredTasks}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShowTask;
