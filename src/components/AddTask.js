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
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Add Task
          </span>
          <input
            value={this.props.taskToList}
            onChange={this.handleChange}
            type="text"
            className={
              this.props.isInputValid
                ? "form-control"
                : "form-control is-invalid"
            }
            placeholder="Task"
            aria-label="Task"
            aria-describedby="basic-addon1"
          />
        </div>
        <input className="btn btn-success" type="submit" value="Add" />
      </div>
    );
  }
}
