import React from 'react';
import PropTypes from 'prop-types';
import style from 'containers/Task.module.scss';

const Task = ({
  task, onToggleTodo, onDeleteTodo, onAddEditInput, editButtonStates, onDeleteEditInput,
  onChangeValue, onBlurDelEditInput, onKeysDelEditInput,
}) => {
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
      onBlur={e => onBlurDelEditInput(e, task, onChangeValue, onDeleteEditInput)}
      onKeyDown={e => onKeysDelEditInput(e, task, onChangeValue, onDeleteEditInput, onDeleteTodo)}
      defaultValue={task.text}
    />
  );
  return (
    <li className={style.le} data-id={task.id} key={task.id}>
      <div className={style.view}>
        <input
          className={checkboxClass}
          type="checkbox"
          onMouseDown={() => onToggleTodo(task.id)}
          checked={task.checked}
        />
        <div className={lableClass} />
        <div
          className={style.view__lable}
          onDoubleClick={() => onAddEditInput(task.id, task.text)}
        >
          {task.text}
        </div>
        <button
          type="button"
          className={style.view__destroy}
          onMouseDown={() => onDeleteTodo(task.id)}
        />
        {editButton}
      </div>
    </li>
  );
};
export default Task;

Task.propTypes = {
  task: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  onToggleTodo: PropTypes.func,
  onBlurDelEditInput: PropTypes.func,
  onKeysDelEditInput: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onAddEditInput: PropTypes.func,
  editButtonStates: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onDeleteEditInput: PropTypes.func,
  onChangeValue: PropTypes.func,
};

Task.defaultProps = {
  task: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  onToggleTodo: PropTypes.func,
  onBlurDelEditInput: PropTypes.func,
  onKeysDelEditInput: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onAddEditInput: PropTypes.func,
  editButtonStates: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  onDeleteEditInput: PropTypes.func,
  onChangeValue: PropTypes.func,
};
