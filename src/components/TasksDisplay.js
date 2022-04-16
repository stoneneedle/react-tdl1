import React from "react";
import { v4 as uuidv4 } from "uuid";

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
          key={uuidv4()}
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-body">
            <div className="row">
              <div className="col">
                <p className="card-text tdl-item-text">{item}</p>
              </div>
              <div className="col text-end">
                <button
                  value={index}
                  onClick={this.handleClickCheck}
                  className="tdl-button tdl-check"
                >
                  ✓
                </button>
                <button
                  value={index}
                  onClick={this.handleClickX}
                  className="tdl-button"
                >
                  <span role="img" aria-label="x">
                    ❌
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      ));

      return (
        <div
          className="card text-dark bg-light mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">
            <h2>To Do List</h2>
          </div>
          <div className="card-body">
            <div className="p-2">
              <h3 className="card-title">Tasks To Be Done</h3>
            </div>
            {tdlItems}
          </div>
        </div>
      );
    }
  }
}
