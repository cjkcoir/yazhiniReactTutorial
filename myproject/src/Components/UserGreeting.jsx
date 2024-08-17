import { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (this.state.isLoggedIn ? <h2>Heloo Yazh</h2> : <h2>Helo Jeyam</h2>)
  }
}

export default UserGreeting;
