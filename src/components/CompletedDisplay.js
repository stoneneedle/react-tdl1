import React from "react";

export default class CompletedDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleComplClickX = this.handleComplClickX.bind(this);
  }

  handleComplClickX(e) {
    this.props.onComplXClick(e.target.value);
  }

  render() {
    const complItems = this.props.toDoList.map((item, index) => (
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <p className="card-text">
            {item}
            <button
              value={index}
              onClick={this.handleComplClickX}
              className="tdl-button"
            >
              ❌
            </button>
          </p>
        </div>
      </div>
    ));
    if (this.props.toDoList.length === 0) {
      return <span></span>;
    } else {
      return (
        <div
          class="card text-white bg-success mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div class="card-header">To Do List</div>
          <div class="card-body">
            <h5 class="card-title">Completed Tasks</h5>
            <p class="card-text">{complItems}</p>
          </div>
        </div>
      );
    }
  }
}
