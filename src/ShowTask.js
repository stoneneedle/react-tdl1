import React from "react";
import AddTask from "./AddTask";
import TasksDisplay from "./TasksDisplay";

export default class ShowTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taskName: "Task 1", tasksArr: [] };

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTaskChange(taskVal) {
    this.setState({ taskName: taskVal });
  }

  handleSubmit(e) {
    //alert("A task was submitted: " + this.state.defTask);
    console.log("A task was submitted: " + this.state.taskName);

    let itemsArr = JSON.parse(JSON.stringify(this.state.tasksArr));
    itemsArr.push(this.state.taskName);
    console.log("itemsArr value: " + itemsArr);
    this.setState({ tasksArr: itemsArr });
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Tasks Array: {this.state.tasksArr.value}</p>
        <form onSubmit={this.handleSubmit}>
          <AddTask
            taskToList={this.state.taskName}
            onTaskChange={this.handleTaskChange}
          />
        </form>
        <TasksDisplay toDoList={this.state.tasksArr} />
      </div>
    );
  }
}
