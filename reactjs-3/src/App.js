import React, { Component } from "react";
import ChildComponent from "./components/ChildComponent";


export class App extends Component {
  constructor(props) {
    super(props);
    console.log("[PARENT]: Inside Constructor");
    this.state = {
      count: 0,
      show: true
    };
  }

  componentDidMount() {
    console.log("[PARENT]: Inside componentDidMount");
    console.log("[PARENT]:-------------MOUNTING FINISHED--------------");
  }
  componentDidUpdate() {
    console.log("Inside componentDidUpdate");
    console.log("[PARENT]:------------UPDATING FINISHED----------------");
  }
  componentWillUnmount() {
    console.log("Inside componentWillUnmount")
    console.log("[PARENT]:------------UNMOUNTING FINISHED--------------")
  } 
  render() {
    console.log("[PARENT]: Inside Render");
    return (
      <div className="App">
        <h1>App</h1>
        <h2>{this.state.count}</h2>
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          {" "}
          Increment{" "}
        </button>
        {this.state.show && <ChildComponent />}
        <button
          onClick={() =>
            this.setState((prevState) => ({ show: !prevState.show }))
          }
        >
          {" "}
          Show/Hide{" "}
        </button>
      </div>
    );
  }
}

export default App;

// import NavBar from "./components/NavBar";
// import Products from "./components/Products";
// {
//   /* <NavBar />
//       <Products /> */
// }
