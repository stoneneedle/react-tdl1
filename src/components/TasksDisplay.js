import React from "react";

export default class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onXClick(e.target.value);
  }

  render() {
    const tdlItems = this.props.toDoList.map((item, index) => (
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <p className="card-text">
            {item}
            <span>
              <button value={index} onClick={this.handleClick}>
                ❌
              </button>
            </span>
          </p>
        </div>
      </div>
    ));

    return (
      <div
        className="card text-dark bg-light mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-header">To Do List</div>
        <div className="card-body">
          <h5 className="card-title">Tasks To Be Done</h5>
          <p className="card-text">{tdlItems}</p>
        </div>
      </div>
    );
  }
}
