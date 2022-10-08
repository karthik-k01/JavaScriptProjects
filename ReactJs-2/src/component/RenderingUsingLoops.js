import React, { Component } from "react";

export class RenderingUsingLoops extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        {
          name: "Karthik",
          batch: 10,
          country: "India",
        },
        {
          name: "Sananda",
          batch: 6,
          country: "US",
        },
        {
          name: "Anirudh",
          batch: 5,
          country: "England",
        },
        {
          name: "Vivek",
          batch: 11,
          country: "Germany",
        },
        {
          name: "Shreyas",
          batch: 8,
          country: "Australia",
        },
      ],
    };
  }
  render() {
    let { students } = this.state;
    return (
      <>
        {students.map((student, index) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
                }}
                key = {index}
          >
            <h1>{student.name}</h1>
            <h1>{student.batch}</h1>
            <h1>{student.country}</h1>
          </div>
        ))}
      </>
    );
  }
}

export default RenderingUsingLoops;
