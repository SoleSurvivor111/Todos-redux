import React from 'react';
import { connect } from 'react-redux';
import style from 'containers/Task.module.scss';

const AddTodo = ({ task, toggleTodo }) => (
  <li data-id={task.id} key={task.id}>
    <div className={style.view}>
      <input
        // className={viewToggleClass}
        type="checkbox"
        onMouseDown={() => toggleTodo(task.id)}
        checked={task.checked}
      />
      <div /* className={viewCheckboxClass} */ />
      <div
        className={style.view__lable}
      >
        {task.text}
      </div>
      <button
        type="button"
        className={style.view__destroy}
      />
    </div>
  </li>
);
export default connect()(AddTodo);
