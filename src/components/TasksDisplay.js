import React from "react";

export default class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickCheck = this.handleClickCheck.bind(this);
    this.handleClickX = this.handleClickX.bind(this);
  }

  handleClickCheck(e) {
    this.props.onCheckClick(e.target.value);
  }

  handleClickX(e) {
    this.props.onXClick(e.target.value);
  }

  render() {
    if (this.props.toDoList.length === 0) {
      return <span></span>;
    } else {
      const tdlItems = this.props.toDoList.map((item, index) => (
        <div
          className="card text-white bg-secondary mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-body">
            <p className="card-text">
              {item}
              <button
                value={index}
                onClick={this.handleClickCheck}
                className="tdl-button"
              >
                ✓
              </button>
              <button
                value={index}
                onClick={this.handleClickX}
                className="tdl-button"
              >
                ❌
              </button>
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
}
