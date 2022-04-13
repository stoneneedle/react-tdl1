import React from "react";

export default class CompletedDisplay extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class="card text-white bg-success mb-3"
        style={{ maxWidth: "18rem" }}
      >
        <div class="card-header">To Do List</div>
        <div class="card-body">
          <h5 class="card-title">Completed Tasks</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    );
  }
}
