import React from 'react';
import PropTypes from 'prop-types';
import style from 'containers/Task.module.scss';
import { blurDelEditInput, keysDelEditInput } from 'containers/AddTodo';


const Task = ({
  task, toggleTodo, deleteTodo, addEditInput, editButtonStates, deleteEditInput,
  changeValue,
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
      onBlur={e => blurDelEditInput(e, task, changeValue, deleteEditInput)}
      onKeyDown={e => keysDelEditInput(e, task, changeValue, deleteEditInput, deleteTodo)}
      defaultValue={task.text}
    />
  );
  return (
    <li className={style.le} data-id={task.id} key={task.id}>
      <div className={style.view}>
        <input
          className={checkboxClass}
          type="checkbox"
          onMouseDown={() => toggleTodo(task.id)}
          checked={task.checked}
        />
        <div className={lableClass} />
        <div
          className={style.view__lable}
          onDoubleClick={() => addEditInput(task.id, task.text)}
        >
          {task.text}
        </div>
        <button
          type="button"
          className={style.view__destroy}
          onMouseDown={() => deleteTodo(task.id)}
        />
        {editButton}
      </div>
    </li>
  );
};
export default Task;

Task.propTypes = {
  task: PropTypes.objectOf.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addEditInput: PropTypes.func.isRequired,
  editButtonStates: PropTypes.func.isRequired,
  deleteEditInput: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
};
