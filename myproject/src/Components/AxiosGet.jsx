import { useEffect, useState } from "react"; // Importing the useEffect and useState hooks from React
import axios from "axios"; // Importing axios to make HTTP requests

function AxiosGet() {
  // Creating a functional component named AxiosGet

  // useState hook to store the fetched posts data as an array
  const [posts, setPosts] = useState([]); // Initialize the posts state as an empty array

  // useEffect hook to make a side-effect (data fetching) when the component mounts
  useEffect(() => {
    // Axios GET request to fetch posts from the API
    axios
      .get("https://jsonplaceholder.typicode.com/posts") // Sending a GET request to this URL
      .then((res) => {
        console.log(res); // Logging the response to the console
        setPosts(res.data); // Update the posts state with the actual data (res.data)
      })
      .catch((error) => console.log(error)); // Catch and log any error that occurs during the request
  }, []); // Empty dependency array means the effect will only run once, after the initial render

  // JSX to render the posts data in a table format
  return (
    <>
      <div className="text-center text-primary mt-3 h2">AxiosGet</div>{" "}
      {/* Page header */}
      <div className="table table-bordered">
        {/* Table for displaying the posts */}
        <thead>
          <tr>
            <th scope="col">ID</th> {/* Column for post IDs */}
            <th scope="col">Title</th> {/* Column for post titles */}
          </tr>
        </thead>

        {/* Table body to display each post */}
        <tbody>
          {/* Mapping over the posts array and rendering each post as a table row */}
          {posts.map((post) => (
            <tr key={post.id}>
              {" "}
              {/* Each row must have a unique key (post.id) */}
              <td>{post.id}</td> {/* Displaying post ID */}
              <td>{post.title}</td> {/* Displaying post title */}
            </tr>
          ))}
        </tbody>
      </div>
    </>
  );
}

export default AxiosGet; // Exporting the AxiosGet component for use in other parts of the application
