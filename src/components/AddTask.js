import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTaskChange(e.target.value);
  }

  render() {
    return (
      <>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">Add Task</InputGroup.Text>
          <FormControl
            value={this.props.taskToList}
            onChange={this.handleChange}
            placeholder="Buy the groceries"
            aria-label="Task 1"
            aria-describedby="basic-addon1"
            isInvalid={(this.props.isInputValid) ? false : true}
          />
          <Form.Control.Feedback type="invalid">
            Please enter some text.
          </Form.Control.Feedback>
        </InputGroup>
        <Button variant="success" type="submit">
          Add
        </Button>
      </>
    );
  }
}
