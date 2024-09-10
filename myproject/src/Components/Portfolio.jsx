import chellImage from "/images/chella.jpeg";

const imageStyle = {
  width: "200px", // Set the width to 200px
  height: "200px", // Set the height to 150px
};

function Portfolio() {
  return (
    <>
      {/* start of navbar */}
      <div className="container-fluid border border-0" id="navbar">
        <div className="row border border-0 border-secondary">
          <div className="col border border-0 border-success p-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
              <a className="navbar-brand" href="#">
                ChellaKarthikeyan
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Qualification
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* End of Navbar */}

      {/* Start of About Section */}

      <div
        className="container-fluid border border-0 bg-light "
        id="aboutsection"
      >
        <div className="row border border-0 border-secondary">
          <div className="col-12 col-md-4 border border-0 border-success p-0">
            <div className="border border-0 border-danger text-center p-5">
              <img
                src={chellImage}
                alt=""
                style={imageStyle}
                className="img-fluid"
              />
              <p className="fs-6 fw-bold">MERN STACK DEVELOPER</p>
            </div>
          </div>

          <div className="col-12 col-md-8 border border-0 border-success p-0 d-flex align-items-center">
            <div className="border border-0 border-danger">
              <h4>About</h4>
              <p>
                Enthusiastic and dedicated MERN Stack Developer with a strong
                foundation in web development and a passion for creating
                responsive, user-friendly applications. Proficient in MongoDB,
                Express.js, React.js, and Node.js, with hands-on experience in
                building full-stack applications through academic projects and
                self-driven learning. Seeking an opportunity to contribute to
                innovative projects and grow within a dynamic development team.
              </p>
              <a href="" className="btn btn-sm btn-warning">
                View Reusme
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* End of About Section */}

      {/* **************************** */}
      {/* Start of Qualification Section */}

      <div
        className="border border-0 border-danger container-fluid bg-dark"
        id="qualification"
      >
        <div className="row border border-0 border-secondary">
          <div className="col border border-0 border-secondary p-0">
            <div className="p-3 p-md-5 border border-0 border-danger">
              <h4 className="text-center text-white mb-4">QUALIFICATION</h4>

              <table className="table table-warning table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Qualification</th>
                    <th scope="col">College/University</th>
                    <th scope="col">Year Passing</th>
                    <th scope="col">Percentage%</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>SSLC</td>
                    <td>Bisop Heber Hr Sec School</td>
                    <td>1987</td>
                    <td>80</td>
                  </tr>

                  <tr>
                    <th scope="row">1</th>
                    <td>12th Grade</td>
                    <td>Bisop Heber Hr Sec School</td>
                    <td>1989</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>BE</td>
                    <td>RVCE Bangalore</td>
                    <td>1993</td>
                    <td>65</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* End of Qualification Section */}
      {/* ****************************************** */}
      {/* Start of Skill Section */}

      <div className="border border-0 border-danger container-fluid bg-light">
        <div className="border border-0 border-success row">
          <div className="border border-0 border-success col p-0 ">
            <div className="border border-0 border-warning p-5">
              <h4 className="text-center">SKILLS</h4>

              <div className="border border-0 border-success row">
                <div className="border border-0 border-success col-12 col-md-6 p-0 d-flex justify-content-md-end">
                  <div className="border border-0 border-danger w-75 mb-5">
                    <h6>HTML</h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                    <h6>MONGODB</h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="70"
                        style={{ width: "70%" }}
                      >
                        70%
                      </div>
                    </div>

                    <h6>REACT </h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        90%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-0 border-success col-12 col-md-6 p-0 d-flex justify-content-md-start">
                  <div className="border border-0 border-danger w-75 mb-5">
                    <h6>CSS</h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="80"
                        style={{ width: "80%" }}
                      >
                        80%
                      </div>
                    </div>
                    <h6>EXPRESS JS</h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="70"
                        style={{ width: "70%" }}
                      >
                        70%
                      </div>
                    </div>

                    <h6>NODE</h6>
                    <div className="progress">
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        aria-valuenow="75"
                        aria-valuemin="0"
                        aria-valuemax="75"
                        style={{ width: "75%" }}
                      >
                        75%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* End of Skill Section */}
      {/* ************************** */}
    </>
  );
}

export default Portfolio;
