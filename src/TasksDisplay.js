import React from "react";

// Test change
// Test change 2
// <li key={index.toString()}>{item}</li>

export default class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tdlItems = this.props.toDoList.map((item, index) => (
      <div className="card text-white bg-secondary mb-3">
        <div className="card-body">
          <p className="card-text">{item}</p>
        </div>
      </div>
    ));

    return (
      <div>
        <p>Tasks Display.</p>
        {tdlItems}
      </div>
    );
  }
}
