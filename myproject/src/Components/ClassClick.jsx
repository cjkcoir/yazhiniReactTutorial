import { Component } from "react";

export class ClassClick extends Component {
  // clickHandler() {
  //   console.log("Clicked the button in class component");
  // }
  render() {
    return (
      <>
        <div className="text-center  mt-5">
          <div
            className="btn btn-lg btn-primary"
            onClick={() => {
              console.log("Clicked the button in class component");
            }}
          >
            ClassClick
          </div>
        </div>
      </>
    );
  }
}

export default ClassClick;
