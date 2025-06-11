import React from "react";

export class Task3 extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  render(): React.ReactNode {
    return (
      <>
        <h1>Меняющаяся кнопка</h1>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Show" : "Hide"}
        </button>
      </>
    );
  }
}
