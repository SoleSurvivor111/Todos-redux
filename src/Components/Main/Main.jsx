import React from 'react';
import ListTask from 'Components/Main/Task';
import PropTypes from 'prop-types';

const Main = ({
  visibleTodoList, editButtonStates, blurDelEditInput, keysDelEditInput, toggleTodo,
  deleteTodo, addEditInput, deleteEditInput, changeValue,
}) => (
  <section className="main">
    <ul className="todo-list">
      {visibleTodoList.map(task => (
        <ListTask
          key={task.id}
          task={task}
          editButtonStates={editButtonStates}
          blurDelEditInput={blurDelEditInput}
          keysDelEditInput={keysDelEditInput}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          addEditInput={addEditInput}
          deleteEditInput={deleteEditInput}
          changeValue={changeValue}
        />
      ))}
    </ul>
  </section>
);
export default Main;

Main.propTypes = {
  editButtonStates: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  blurDelEditInput: PropTypes.func,
  keysDelEditInput: PropTypes.func,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  deleteEditInput: PropTypes.func,
  changeValue: PropTypes.func,
  addEditInput: PropTypes.func,
  visibleTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};

Main.defaultProps = {
  editButtonStates: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
    }),
  ),
  blurDelEditInput: PropTypes.func,
  keysDelEditInput: PropTypes.func,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  deleteEditInput: PropTypes.func,
  addEditInput: PropTypes.func,
  changeValue: PropTypes.func,
  visibleTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};
