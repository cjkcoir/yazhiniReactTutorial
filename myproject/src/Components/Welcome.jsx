import { Component } from "react";

export class Welcome extends Component {
  render() {
    const{name,age,children}=this.props;
    return (
      <>
        <h1>
          Welcome {name} Age={age} {children}
        </h1>
      </>
    );
  }
}

export default Welcome;
