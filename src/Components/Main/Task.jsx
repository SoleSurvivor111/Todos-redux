import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from 'containers/Task.module.scss';

class Task extends Component {
  handleBlur = (e) => {
    const {
      task,
      onDeleteEditInput,
      onChangeValue,
      onBlurDelEditInput,
    } = this.props;
    onBlurDelEditInput(e, task, onChangeValue, onDeleteEditInput);
  }

  handleKeyDown = (e) => {
    const {
      task,
      onDeleteTodo,
      onDeleteEditInput,
      onChangeValue,
      onKeysDelEditInput,
    } = this.props;
    onKeysDelEditInput(e, task, onChangeValue, onDeleteEditInput, onDeleteTodo);
  }

  handleToggleTodo = () => {
    const { onToggleTodo, task } = this.props;
    onToggleTodo(task.id);
  }

  handleDeleteTodo = () => {
    const { onDeleteTodo, task } = this.props;
    onDeleteTodo(task.id);
  }

  handleAddEditInput = () => {
    const { onAddEditInput, task } = this.props;
    onAddEditInput(task.id, task.text);
  }

  render() {
    const {
      task,
      editButtonStates,
    } = this.props;
    const currentTask = editButtonStates.id === task.id;
    const checkboxClass = currentTask
      ? `${style.view__toggle} invisible`
      : style.view__toggle;

    const lableClass = currentTask
      ? `${style.view__checkbox} invisible`
      : style.view__checkbox;

    const editButton = currentTask
    && (
      <input
        type="textarea"
        className={style.view__edit}
        autoFocus
        onBlur={this.handleBlur}
        onKeyDown={this.handleDown}
        defaultValue={task.text}
      />
    );
    return (
      <li className={style.le} data-id={task.id} key={task.id}>
        <div className={style.view}>
          <input
            className={checkboxClass}
            type="checkbox"
            onMouseDown={this.handleToggleTodo}
            checked={task.checked}
          />
          <div className={lableClass} />
          <div
            className={style.view__lable}
            onDoubleClick={this.onAddEditInput}
          >
            {task.text}
          </div>
          <button
            type="button"
            className={style.view__destroy}
            onMouseDown={this.handleDeleteTodo}
          />
          {editButton}
        </div>
      </li>
    );
  }
}
export default Task;

Task.propTypes = {
  task: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
  }),

  onToggleTodo: PropTypes.func.isRequired,
  onBlurDelEditInput: PropTypes.func.isRequired,
  onKeysDelEditInput: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onAddEditInput: PropTypes.func.isRequired,
  editButtonStates: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),

  onDeleteEditInput: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
};
