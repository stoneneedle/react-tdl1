import React from "react";
import AddTask from "./AddTask";
import TasksDisplay from "./TasksDisplay";
import CompletedDisplay from "./CompletedDisplay";

export default class ShowTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = { taskName: "Task 1", tasksArr: [], completedArr: [] };

    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleXClick = this.handleXClick.bind(this);
    this.handleComplXClick = this.handleComplXClick.bind(this);
  }

  handleTaskChange(taskVal) {
    this.setState({ taskName: taskVal });
  }

  handleSubmit(e) {
    e.preventDefault();
    // copy array that's currently in state
    let itemsArr = JSON.parse(JSON.stringify(this.state.tasksArr));

    // add task to itemsArr
    itemsArr.push(this.state.taskName);

    // reset state
    this.setState({ tasksArr: itemsArr });
  }

  handleCheckClick(e) {
    // copy array that's currently in state
    let itemsArr = JSON.parse(JSON.stringify(this.state.tasksArr));
    let completedItemsArr = JSON.parse(JSON.stringify(this.state.completedArr));

    console.log(parseInt(e));
    let completedTask = itemsArr.splice(parseInt(e), 1)[0];
    console.log(itemsArr);
    completedItemsArr.push(completedTask);

    this.setState({ tasksArr: itemsArr, completedArr: completedItemsArr });

    console.log(this.state);
  }

  handleXClick(e) {
    // copy array that's currently in state
    let itemsArr = JSON.parse(JSON.stringify(this.state.tasksArr));

    // remove task number from items array and reset state
    itemsArr.splice(parseInt(e), 1);
    this.setState({ tasksArr: itemsArr });
  }

  handleComplXClick(e) {
    // copy array that's currently in state
    let completedItemsArr = JSON.parse(JSON.stringify(this.state.completedArr));

    // remove task number from items array and reset state
    completedItemsArr.splice(parseInt(e), 1);
    this.setState({ completedArr: completedItemsArr });
  }

  render() {
    return (
      <div>
        <div className="p-3">
          <form onSubmit={this.handleSubmit}>
            <AddTask
              taskToList={this.state.taskName}
              onTaskChange={this.handleTaskChange}
            />
          </form>
        </div>
        <div className="p-3">
          <CompletedDisplay
            toDoList={this.state.completedArr}
            onComplXClick={this.handleComplXClick}
          />
        </div>
        <div className="p-3">
          <TasksDisplay
            toDoList={this.state.tasksArr}
            onCheckClick={this.handleCheckClick}
            onXClick={this.handleXClick}
          />
        </div>
      </div>
    );
  }
}
