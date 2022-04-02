import React from "react";

// Test change
// Test change 2

export default class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tdlItems = this.props.toDoList.map((item, index) => (
      <li key={index.toString()}>{item}</li>
    ));

    return (
      <div>
        <p>Tasks Display.</p>
        <ul>{tdlItems}</ul>
      </div>
    );
  }
}
