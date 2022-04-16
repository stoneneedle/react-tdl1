import React from "react";
import AddTask from "./AddTask";
import TasksDisplay from "./TasksDisplay";
import CompletedDisplay from "./CompletedDisplay";
import { v4 as uuidv4 } from "uuid";

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

    // create task object
    let taskObj = {
      id: uuidv4(),
      task: this.state.taskName
    };

    // copy array that's currently in state
    let itemsArr = structuredClone(this.state.tasksArr);

    // add task to itemsArr
    itemsArr.push(taskObj);

    // reset state
    this.setState({ tasksArr: itemsArr });
  }

  handleCheckClick(e) {
    // copy arrays that're currently in state
    let itemsArr = structuredClone(this.state.tasksArr);
    let completedItemsArr = structuredClone(this.state.completedArr);

    // filter out the objects that don't have the selected ID to keep
    let filteredItemsArr = itemsArr.filter((item) => item.id !== e);

    // select completed task object by ID
    let completedTask = itemsArr.filter((item) => item.id === e);

    completedItemsArr.push(...completedTask);

    this.setState({
      tasksArr: filteredItemsArr,
      completedArr: completedItemsArr
    });

    console.log(this.state);
  }

  handleXClick(e) {
    // copy array that's currently in state
    let itemsArr = structuredClone(this.state.tasksArr);

    // filter out the objects that don't have the selected ID to keep
    let filteredItemsArr = itemsArr.filter((item) => item.id !== e);

    // reset state
    this.setState({ tasksArr: filteredItemsArr });
  }

  handleComplXClick(e) {
    // copy array that's currently in state
    let completedItemsArr = structuredClone(this.state.completedArr);

    // remove task number from items array and reset state
    let filteredCompletedItemsArr = completedItemsArr.filter(
      (item) => item.id !== e
    );

    //completedItemsArr.splice(parseInt(e, 10), 1);
    this.setState({ completedArr: filteredCompletedItemsArr });
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
