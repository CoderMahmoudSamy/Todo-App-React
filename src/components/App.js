import React from "react";
import AddTask from "./AddTask";
import ShowTask from "./ShowTask";
import "../style/style.css";

class App extends React.Component {
  state = {
    tasks: [],
  };
  onFormSubmitTask = (taskName) => {
    this.setState({ tasks: [taskName] });
    console.log(taskName);
  };
  render() {
    return (
      <div className="container main">
        <AddTask onFormSubmitTask={this.onFormSubmitTask} />
        <hr />
        <ShowTask tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
