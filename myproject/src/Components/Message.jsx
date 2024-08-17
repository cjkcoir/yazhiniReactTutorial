import { Component } from "react";

export class Message extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Welcome Visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subscribing our channel",
    });
  }

  render() {
    return (
      <>
        <div className="h1 text-primary">{this.state.message}</div>
        <button
          className="btn btn-lg btn-success"
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subcribe
        </button>
      </>
    );
  }
}

export default Message;
