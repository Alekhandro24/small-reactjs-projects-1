import { Component } from "react";
// import Language from "./component/Language";
// import List from "./component/List";
// import { UseCompRef } from "./component/useCompRef";
// import Counter from "./component/Counter";
import { Container } from "./App.styled";
// import Widget from "./component/Widget/Widget";
// import ModernCarousel from "./component/ModernCarousel/ModernCarousel";
// import ReactScrolling from "./component/ReactScrolling/ReactScrolling";
// import { Parallax } from "./component/Parallax/Parallax";
// import { WavyRouter } from "./component/WavyRouter/WavyRouter";
// import ModalPopup from "./component/modalPopup/modalPopup";
import ModalPopup2 from "./component/modalPopup2/modalPopup2";

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
        {/* <Language />
        <ul>
          {this.state.data.map((item) => (
            <List data={item} />
          ))}
        </ul>

        <UseCompRef />
        <Counter />
        <Widget />
        <ModernCarousel />
        <ReactScrolling /> */}
        {/* <Parallax /> */}
        {/* <WavyRouter /> */}
        {/* <ModalPopup /> */}
        <ModalPopup2 />
      </Container>
    );
  }
}

export default App;
