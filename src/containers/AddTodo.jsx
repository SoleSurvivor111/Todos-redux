import React from 'react';
import { connect } from 'react-redux';
import style from 'containers/Task.module.scss';
import * as actions from 'actions/mainActions';

const AddTodo = ({
  task, toggleTodo, deleteTodo, addEditInput, editButtonStates,
}) => {
  const editButton = editButtonStates.id === task.id
    && (
      <input
        type="textarea"
        className={style.view__edit}
        autoFocus
        // onBlur={e => onRemoveEditInput(task.key, e)}
        // onKeyDown={e => onKeysRemoveEditInput(task.key, e)}
        // onChange={onChange}
        defaultValue={task.text}
      />
    );
  return (
    <li className={style.le} data-id={task.id} key={task.id}>
      <div className={style.view}>
        <input
          className={style.view__toggle}
          type="checkbox"
          onMouseDown={() => toggleTodo(task.id)}
          checked={task.checked}
        />
        <div className={style.view__checkbox} />
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
export default connect(mapStateToProps, actions)(AddTodo);
