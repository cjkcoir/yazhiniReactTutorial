import { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount() {
    this.setState(
      (prevState) => ({ count: prevState.count + 1 }),
      () => {
        console.log(`count :${this.state.count}`);
      }
    );
  }

  //2nd method

  incrementCountFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <>
        <div>Counter = {this.state.count}</div>
        <button
          className="btn btn-lg btn-danger"
          onClick={() => {
            this.incrementCountFive();
          }}
        >
          Increase Count
        </button>
      </>
    );
  }
}

export default Counter;
