import { useState } from "react"; // Importing the useState hook from React for managing state
import axios from "axios"; // Importing axios to handle HTTP requests

function AxiosPost() {
  // Creating a functional component named AxiosPost

  // useState hooks to manage input fields for userId, title, and body
  const [userid, setUserid] = useState(""); // State to hold the value of the user ID
  const [title, setTitle] = useState(""); // State to hold the value of the title
  const [body, setBody] = useState(""); // State to hold the value of the body

  // Function to handle form submission
  const submitHandler = () => {
    event.preventDefault(); // Prevents the default form submission behavior (like page reload)
    console.log(userid, title, body); // Logs the current state values of userId, title, and body

    // Axios POST request to the given URL
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        // Sends a POST request to the API
        userId: userid, // Passes userId as part of the request payload
        title: title, // Passes title as part of the request payload
        body: body, // Passes body as part of the request payload
      })
      .then((res) => {
        console.log(res); // Logs the response from the server if successful
      })
      .catch((error) => {
        console.log(error); // Logs any errors if the request fails
      });
  };

  // JSX to render the form
  return (
    <>
      {/* Form title */}
      <div className="text-center text-primary mt-3 h2">AxiosPost</div>

      {/* Form structure */}
      <form
        className="form w-50 p-3 border-2 border border-black mx-auto rounded-4"
        onSubmit={submitHandler} // Calls submitHandler when the form is submitted
      >
        {/* User ID input field */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="userId">User ID :</label>{" "}
            {/* Label for the User ID field */}
            <input
              type="text" // Text input type
              name="userId" // Input field name
              id="userId" // Input field ID for accessibility
              value={userid} // Binds the input field value to the userid state
              className="form-control" // Applies Bootstrap form styling
              onChange={(event) => setUserid(event.target.value)} // Updates the userid state when the value changes
            />
          </div>
        </div>

        {/* Title input field */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="title">Title:</label>{" "}
            {/* Label for the Title field */}
            <input
              type="text" // Text input type
              name="title" // Input field name
              id="title" // Input field ID for accessibility
              value={title} // Binds the input field value to the title state
              className="form-control" // Applies Bootstrap form styling
              onChange={(event) => setTitle(event.target.value)} // Updates the title state when the value changes
            />
          </div>
        </div>

        {/* Body input field */}
        <div className="row">
          <div className="form-group">
            <label htmlFor="body">Body :</label>{" "}
            {/* Label for the Body field */}
            <input
              type="text" // Text input type
              name="body" // Input field name
              id="body" // Input field ID for accessibility
              value={body} // Binds the input field value to the body state
              className="form-control" // Applies Bootstrap form styling
              onChange={(event) => setBody(event.target.value)} // Updates the body state when the value changes
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="row">
          <button type="submit" className="btn btn-primary btn-sm mt-4">
            Enter
          </button>
        </div>
      </form>
    </>
  );
}

export default AxiosPost; // Exports the AxiosPost component for use in other parts of the application
