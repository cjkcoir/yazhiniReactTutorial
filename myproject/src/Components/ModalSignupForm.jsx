import { useState } from "react";

function ModalSignupForm() {
  const [usernam, setusernam] = useState("");
  const [email, setEmail] = useState("");
  const [passwod, setpasswod] = useState("");

  const handleSubmi = (event) => {
    event.preventDefault();
    // Handle form submission
    console.log("usernam:", usernam);
    console.log("Email:", email);
    console.log("passwod:", passwod);
  };
  return (
    <>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        SignUP
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                SignUp
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmi}>
                {" "}
                <div className="mb-3">
                  <label htmlFor="usernam" className="form-label">
                    usernam
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="usernam"
                    placeholder="Enter usernam"
                    value={usernam}
                    onChange={(e) => setusernam(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="passwod" className="form-label">
                    password
                  </label>
                  <input
                    type="passwod"
                    className="form-control"
                    id="passwod"
                    placeholder="passwod"
                    value={passwod}
                    onChange={(e) => setpasswod(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
                {/* Google Sign-In button (replace with actual implementation) */}
                <button
                  type="button"
                  className="btn btn-outline-secondary mt-2"
                >
                  Sign up with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalSignupForm;
