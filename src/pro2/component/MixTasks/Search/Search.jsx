import { Component } from "react";

class Search extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    // const { target } = e;
    // const { value } = target;
    // this.setState({ value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.value);
  };

  render() {
    return (
      <>
        <form
          action=""
          className="d-flex mt-2"
          role="search"
          onSubmit={this.handleSubmit}
        >
          <input
            onChange={this.handleChange}
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={this.state.value}
          />
          <button type="submit" className="btn btn-outline-success">
            Search
          </button>
        </form>
      </>
    );
  }
}

export default Search;
