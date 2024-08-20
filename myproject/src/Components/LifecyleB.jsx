import { Component } from "react";

export class LifeCycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Yazhini",
    };
    console.log("LifeCycleB  constructor");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("LifeCycleB  getDerivedStateFromProps");

    return null;
  }

  shouldComponentUpdate() {
    console.log("LifecycleB should Component Update");
    return true;
  }

  componentDidMount() {
    console.log("LifeCycleB componentDidMount()");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapshot Before Update");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifeCycleB  render");

    return <div>LifeCycleB</div>;
  }
}

export default LifeCycleB;
