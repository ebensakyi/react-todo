import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markCompleteProp={this.props.markCompleteProp}
        deleteTodoProp={this.props.deleteTodoProp}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
};

export default Todos;
