import { Component } from "react";
import Header from "./Header/Header";
// import Counter from "./Counter/Counter";
// import Modal from "./Modal/Modal";
import ToDoList from "./TodoList/TodoList";

class MixTasks extends Component {
  state = {
    isShowModal: false,
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <ToDoList />
        {/* <Counter /> */}
        {/* {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
              dolorem itaque nihil tenetur illo sapiente minus modi maiores rem
              quidem veritatis at magni dolore, dolorum perferendis! Repudiandae
              molestias quia quis quam illum molestiae reprehenderit esse?
            </p>
          </Modal>
        )} */}
      </div>
    );
  }
}

export default MixTasks;
