import React from "react";

export default class TBDCheck extends React.Component {
  constructor(props) {
    super(props);
    this.handleXClick = this.handleXClick.bind(this);
  }

  handleXClick(e) {
    this.props.onXClick(e.target.value);
  }

  render() {
    return (<span><a href='#' onClick={this.handleXClick()}>❌</a></span>);
  }
}