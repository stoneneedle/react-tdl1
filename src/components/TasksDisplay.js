import React from "react";
import TBDCheck from "./TBDCheck";
import TBDX from "./TBDX";

export default class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tdlItems = this.props.toDoList.map((item, index) => (
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <p className="card-text">{item} <TBDCheck /> <TBDX /></p>
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
