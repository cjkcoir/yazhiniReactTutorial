import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `username:${this.state.username}  comments:${this.state.comments} Topic:${this.state.topic}`
    );
  };
  render() {
    return (
      <>
        <form
          className="form w-25 p-3 border border-2 border-black  bg-light mx-auto mt-4 rounded-3"
          onSubmit={this.handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="txtUsername">UserName :</label>
            <input
              className="form-control"
              type="text"
              name="txtUsername"
              id="txtUsername"
              value={this.state.username}
              onChange={this.handleUsernameChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments</label>
            <textarea
              name="comments"
              id="comments"
              cols="30"
              rows="5"
              className="form-control"
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>

          <label htmlFor="selectTopic" className="form-label">
            Topics
          </label>
          <select
            name="selectTopic"
            id="selectTopic"
            className="form-select"
            value={this.state.topic}
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="mongodb">MongoDB</option>
            <option value="express">Express</option>
          </select>

          <button className="btn btn-lg btn-success " type="submit">
            Submit
          </button>
        </form>
      </>
    );
  }
}

export default Form;
