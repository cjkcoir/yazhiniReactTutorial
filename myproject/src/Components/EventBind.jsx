import { Component } from "react";

export class EventBind extends Component {
  //constructor

  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.eventHandler = this.eventHandler.bind(this);
  }

  //   eventHandler () {
  //     this.setState({
  //       message: "Good Bye Yazh",
  //     });
  //   }

  eventHandler = () => {
    this.setState({
      message: "Good Bye Jeyams",
    });
  };

  render() {
    return (
      <>
        <div className="h2 text-danger text-center mt-5">
          {this.state.message}
        </div>

        <div className="text-center">
          <button
            className="btn btn-lg btn-success mt-3 text-center"
            onClick={this.eventHandler}
          >
            Click Me
          </button>
        </div>
      </>
    );
  }
}

export default EventBind;
