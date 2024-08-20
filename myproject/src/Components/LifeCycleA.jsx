import { Component } from "react";
import LifeCycleB from "./LifecyleB";

export class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yazhini",
    };
    console.log("lifecycleA  constructor");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("lifecycleA  getDerivedStateFromProps");

    return null;
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A should Component Update");
    return true;
  }

  componentDidMount() {
    console.log("lifecycleA componentDidMount()");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  changeState=()=>{

    this.setState({
        name:"Kabilan"
    })
  }

  render() {
    console.log("lifecycleA  render");

    return (
      <>
        <div className="h3 text-center text-warning">LifeCycleA</div>;
        <button
          className="btn btn-primary text-center"
          onClick={this.changeState}
        >
          Change State
        </button>
        <LifeCycleB></LifeCycleB>
      </>
    );
  }
}

export default LifeCycleA;
