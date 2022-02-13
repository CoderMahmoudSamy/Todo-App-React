import React from "react";

class AddTask extends React.Component {
  state = {
    taskValue: "",
  };
  onInputChange = (event) => {
    this.setState({ taskValue: event.target.value });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmitTask(this.state.taskValue);
  };

  render() {
    return (
      <div className="add-task">
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.taskValue}
            onChange={this.onInputChange}
            type="text"
            placeholder="Add Task..."
          />
        </form>
      </div>
    );
  }
}

export default AddTask;
