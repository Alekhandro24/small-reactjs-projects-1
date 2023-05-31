import { Component } from "react";

class FormTodo extends Component {
  state = {
    todo: "",
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.todo);
    this.setState({
      todo: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Create to-do
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="exampleInput"
            aria-describedby="emailHelp"
            onChange={this.handleChange}
            value={this.state.todo}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          add to-do
        </button>
      </form>
    );
  }
}
export default FormTodo;
