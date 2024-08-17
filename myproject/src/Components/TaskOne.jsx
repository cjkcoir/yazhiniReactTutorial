import taskstyle from "./TaskOneStyle.module.css";

function TaskOne() {
  return (
    <>
      <div className="container m-3">
        <div className="row ">
          <div className="col-sm-12  h-100 bg-primary rounded-3">
            <div className={taskstyle.firstrow}>header</div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-sm-10 h-100  rounded-4">
            <div className={taskstyle.maindiv}>
              main
              <div className="row">
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
                <div className="col-sm-3">
                  <div className={taskstyle.inneritem}>item</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2  h-100 rounded-3">
            <div className={taskstyle.sidediv}>sidebar</div>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-sm-12  h-100 bg-info rounded-3">
            <div className={taskstyle.footerrow}>footer</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskOne;
