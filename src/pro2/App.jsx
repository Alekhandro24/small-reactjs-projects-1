import { Component } from "react";
import Language from "./component/Language";
import List from "./component/List";
import { UseCompRef } from "./component/useCompRef";
import Counter from "./component/Counter";
import { Container } from "./App.styled";
import Widget from "./component/Widget/Widget";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          name: "Javascript",
        },
        {
          name: "Python",
        },
        {
          name: "C/Cpp",
        },
      ],
    };
  }
  render() {
    return (
      <Container>
        <Language />
        <ul>
          {this.state.data.map((item) => (
            <List data={item} />
          ))}
        </ul>

        <UseCompRef />
        <Counter />
        <Widget />
      </Container>
    );
  }
}

export default App;
