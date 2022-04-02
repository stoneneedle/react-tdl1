import React from "react";

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTaskChange(e.target.value);
  }

  render() {
    return (
      <div>
        <label htmlFor="taskToList">Add Task: </label>
        <input value={this.props.taskToList} onChange={this.handleChange} />
        <input className="btn btn-success" type="submit" value="Click" />
      </div>
    );
  }
}
