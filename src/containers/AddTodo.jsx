import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from 'containers/Task.module.scss';
import * as actions from 'actions/mainActions';
const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

const AddTodo = ({
  task, toggleTodo, deleteTodo, addEditInput, editButtonStates, deleteEditInput,
  changeValue,
}) => {
  const currentTask = editButtonStates.id === task.id;
  const checkboxClass = currentTask ? `${style.view__toggle} invisible` : style.view__toggle;
  const lableClass = currentTask ? `${style.view__checkbox} invisible` : style.view__checkbox;
  const editButton = currentTask
    && (
      <input
        type="textarea"
        className={style.view__edit}
        autoFocus
        onBlur={(e) => {
          changeValue(task.id, e.target.value);
          deleteEditInput(task.id);
        }}
        onKeyDown={(e) => {
          if (e.which === ENTER_KEY
            || e.keyCode === ENTER_KEY) {
            if (e.target.value.trim() === '') {
              deleteTodo(task.id);
              return;
            }
            changeValue(task.id, e.target.value);
            deleteEditInput(task.id);
          } else if (e.which === ESCAPE_KEY) {
            deleteEditInput(task.id);
          }
        }
      }
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
const mapStateToProps = state => ({
  editButtonStates: state.editButtonStates,
});

PropTypes.AddTodo = {
  task: PropTypes.objectOf.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  addEditInput: PropTypes.func.isRequired,
  editButtonStates: PropTypes.func.isRequired,
  deleteEditInput: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(AddTodo);
