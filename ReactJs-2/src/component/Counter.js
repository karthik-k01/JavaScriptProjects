import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count +1,
    }));
    };
    
    decrementCounter = () => {
        this.setState({
          count: this.state.count -1,
        });
      };

  increment5 = () => {
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
    this.incrementCounter()
      }
  
  render() {
    let { count } = this.state;
    return (
      <>
        <h1 style={{ fontSize: "10em", margin: "10px" }}>{count}</h1>
        <button
          onClick={this.incrementCounter}
          style={{ fontSize: "20px", padding: "10px", margin: "10px" }}
        >
          Increment
            </button>
            <br></br>
            <button
          onClick={this.decrementCounter}
          style={{ fontSize: "20px", padding: "10px", margin: "10px"  }}
        >
          Decrement
        </button>
        <br></br>
        <button
          onClick={this.increment5}
          style={{ fontSize: "20px", padding: "10px", margin: "10px"  }}
        >
          Increment 5
            </button>
      </>
    );
  }
}

export default Counter;
