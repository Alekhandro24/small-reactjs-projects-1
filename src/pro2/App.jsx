import { Component } from "react";
import Language from "./component/Language";
import List from "./component/List";

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
      <div>
        <Language />
        <ul>
          {this.state.data.map((item) => (
            <List data={item} />
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
