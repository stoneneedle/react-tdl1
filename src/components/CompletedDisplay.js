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
        key={item.id}
        style={{ maxWidth: "18rem" }}
      >
        <div className="card-body">
          <div className="row">
            <div className="col">
              <p className="card-text tdl-item-text">{item.task}</p>
            </div>
            <div className="col text-end">
              <button
                value={item.id}
                onClick={this.handleComplClickX}
                className="tdl-button"
              >
                ❌
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
    if (this.props.toDoList.length === 0) {
      return <span></span>;
    } else {
      return (
        <div
          className="card text-white bg-success mb-3"
          style={{ maxWidth: "18rem" }}
        >
          <div className="card-header">
            <h2>To Do List</h2>
          </div>
          <div className="card-body">
            <div className="p-2">
              <h3 className="card-title">Completed Tasks</h3>
            </div>
            {complItems}
          </div>
        </div>
      );
    }
  }
}
