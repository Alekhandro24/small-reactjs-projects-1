import { Component } from "react";
import ToDo from "./ToDo/ToDO";
import todo from "../todo.json";

class ToDoList extends Component {
  state = {
    todoList: todo,
  };

  // handleCheckCompleted = (id) => {
  //   this.setState((prevState) => {
  //     return {
  //       todoList: prevState.todoList.map((todo) =>
  //         todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //       ),
  //     };
  //   });
  // };

  render() {
    return (
      <>
        <h1>My To-Do list</h1>
        <ul className="list-group list-group-flush">
          {this.state.todoList.map((todo) => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={this.handleCheckCompleted}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default ToDoList;
