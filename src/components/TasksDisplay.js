import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

export default class TasksDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickCheck = this.handleClickCheck.bind(this);
    this.handleClickX = this.handleClickX.bind(this);
  }

  handleClickCheck(e) {
    this.props.onCheckClick(e.target.value);
  }

  handleClickX(e) {
    this.props.onXClick(e.target.value);
  }

  render() {
    if (this.props.toDoList.length === 0) {
      return <></>;
    } else {
      const tdlItems = this.props.toDoList.map((item) => (
        <Card
          className="bg-secondary text-white mb-2"
          key={item.id}
        >
          <Card.Body>
            <Row>
              <Col xs={9} md={10} className="tdl-item-text">{item.task}</Col>
              <Col xs={3} md={2}>
                <Button
                  value={item.id}
                  onClick={this.handleClickCheck}
                  className="tdl-button tdl-check"
                >
                  ✓
                </Button>
                <Button
                  value={item.id}
                  onClick={this.handleClickX}
                  className="tdl-button"
                >
                  ❌
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ));

      return (
        <>
          <Card className="bg-warning">
            <Card.Header>
              <h2>To Do List</h2>
            </Card.Header>
            <Card.Body>
              <h3 className="card-title">Tasks To Be Done</h3>
            </Card.Body>
            <Card.Body>{tdlItems}</Card.Body>
          </Card>
        </>
      );
    }
  }
}
