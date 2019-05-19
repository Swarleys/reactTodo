import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditting: false,
      task: this.props.task
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toogleForm = this.toogleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleToogle = this.handleToogle.bind(this);
  }

  handleRemove() {
    this.props.removeTodo(this.props.id);
  }
  toogleForm() {
    this.setState({ isEditting: !this.state.isEditting });
  }
  handleUpdate(evt) {
    evt.preventDefault();
    this.props.updateTodo(this.props.id, this.state.task);
    this.setState({ isEditting: false });
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleToogle(evt) {
    this.props.toogleTodo(this.props.id);
  }

  render() {
    let result;

    if (this.state.isEditting) {
      result = (
        <div className="Todo">
          <form onSubmit={this.handleUpdate} className="Todo-edit-form" >
            <input
              type="text"
              value={this.state.task}
              name="task"
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={
              this.props.completed ? "Todo-task completed" : "Todo-task"
            }
            onClick={this.handleToogle}
          >
            {this.props.task}
          </li>
          <div className="Todo-buttons">
            <button onClick={this.toogleForm}>
              <i className="fas fa-pen" />
            </button>
            <button onClick={this.handleRemove}>
              <i className="fas fa-trash" />
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
