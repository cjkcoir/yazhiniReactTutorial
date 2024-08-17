import { Component } from "react";
import ChildComponent from "./ChildComponent";

export class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(_childrenName) {
    alert(`Hello ${this.state.message} from ${this._childrenName}`);
  }

  render() {
    return (
      <>
        {/* <div>ParentComponent</div> */}

        <ChildComponent greetHandler={this.greetParent}></ChildComponent>
      </>
    );
  }
}

export default ParentComponent;
