import React, { Component } from "react";
import { Button } from 'react-bootstrap';

export class BootstrapBasics extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Basics of React Bootstrap</h1>
        <Button variant="primary">Primary</Button>{' '}
      </>
    );
  }
}

export default BootstrapBasics
