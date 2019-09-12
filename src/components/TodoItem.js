import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  };

 
  render() {
const {id, msg} = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <p>
          <input type='checkbox' onChange={this.props.markCompleteProp.bind(this,id)} />
          {'  '}
          {msg}
          <button style={btnStyle} onClick={this.props.deleteTodoProp.bind(this,id)}>X</button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
};

const btnStyle ={
    background: 'red',
    color:'#fff',
    padding : '2px 5px',
    marginLeft: '10px',
    border:'none',
    borderRadius:'50%',
    cursor: 'pointer',
    float:'right '
}
export default TodoItem;
