import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

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
      <>
        <Card
          className="bg-secondary text-white mb-2"
          key={item.id}
        >
          <Card.Body>
            <Row>
              <Col xs={10} className="tdl-item-text">{item.task}</Col>
              <Col xs={2} className="text-end">
                <Button
                  value={item.id}
                  onClick={this.handleComplClickX}
                  className="tdl-button"
                >
                  ❌
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </>
    ));
    if (this.props.toDoList.length === 0) {
      return <></>;
    } else {
      return (
        <>
          <Card
            className="bg-success text-white mb-3"
          >
            <Card.Header>
              <h2>To Do List</h2>
            </Card.Header>
            <Card.Body>
              <h3 className="card-title">Completed Tasks</h3>
            </Card.Body>
            <Card.Body>{complItems}</Card.Body>
          </Card>
        </>
      );
    }
  }
}
