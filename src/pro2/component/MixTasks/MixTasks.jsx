import { Component } from "react";
import Header from "./Header/Header";
// import Counter from "./Counter/Counter";
// import Modal from "./Modal/Modal";
// import FormLogin from "./FormLogin/FormLogin";
// import ToDoList from "./TodoList/TodoList";
import { nanoid } from "nanoid";
import Search from "./Search/Search";
import ContentInfo from "./ContentInfo/ContetntInfo";

class MixTasks extends Component {
  state = {
    isShowModal: false,
    searchText: "",
  };

  showModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  createUser = (data) => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log("newUser", newUser);
  };

  handleSearch = (searchText) => {
    this.setState({ searchText });
  };

  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: "white", height: "100vh" }}
      >
        <Header showModal={this.showModal} />
        {/* <ToDoList /> */}
        {/* <Counter /> */}
        {/* {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>
            <FormLogin
              createUser={this.createUser}
              closeModal={this.closeModal}
            />
          </Modal>
        )} */}
        <Search handleSearch={this.handleSearch} />
        <ContentInfo searchText={this.state.searchText} />
      </div>
    );
  }
}

export default MixTasks;
