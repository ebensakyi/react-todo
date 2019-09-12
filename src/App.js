import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/partials/Header";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, msg: "Code till till till", completed: false },
      { id: 2, msg: "Go to church", completed: false },
      { id: 3, msg: "Make more money", completed: false }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteTodo = (id) => {
this.setState({todos:[...this.state.todos.filter(todo=>todo.id!== id)]});  };
  render() {
    return (
      <div className="App">
        <Header />
        <Todos
          todos={this.state.todos}
          markCompleteProp={this.markComplete}
          deleteTodoProp={this.deleteTodo}
        />
      </div>
    );
  }
}
