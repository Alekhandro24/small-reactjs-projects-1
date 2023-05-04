import { Component } from "react";

class List extends Component {
  render() {
    return <li>{this.props.data.name}</li>;
  }
}

export default List;
