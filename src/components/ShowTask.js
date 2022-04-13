import React from "react";
import AddTask from "./AddTask";
import TasksDisplay from "./TasksDisplay";
import CompletedDisplay from "./CompletedDisplay";

export default class ShowTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taskName: "Task 1", tasksArr: [] };

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
  }

  handleTaskChange(taskVal) {
    this.setState({ taskName: taskVal });
  }

  handleSubmit(e) {
    let itemsArr = JSON.parse(JSON.stringify(this.state.tasksArr));
    itemsArr.push(this.state.taskName);

    this.setState({ tasksArr: itemsArr });
    e.preventDefault();
  }

  handleCheckClick(e) {
    console.log(e);
  }

  handleXClick(e) {
    // copy array that's currently in state
    let itemsArr = JSON.parse(JSON.stringify(this.state.tasksArr));

    // remove task number from items array and reset state
    itemsArr.splice(e, 1);
    this.setState({ tasksArr: itemsArr });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <AddTask
            taskToList={this.state.taskName}
            onTaskChange={this.handleTaskChange}
          />
        </form>
        <CompletedDisplay />
        <TasksDisplay
          toDoList={this.state.tasksArr}
          onCheckClick={this.handleCheckClick}
          onXClick={this.handleXClick}
        />
      </div>
    );
  }
}
