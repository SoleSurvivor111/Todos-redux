import React from 'react';
import ListTask from 'Components/Main/Task';
import PropTypes from 'prop-types';

const Main = ({
  visibleTodoList, editButtonStates, onBlurDelEditInput, onKeysDelEditInput, onToggleTodo,
  onDeleteTodo, onAddEditInput, onDeleteEditInput, onChangeValue,
}) => (
  <section className="main">
    <ul className="todo-list">
      {visibleTodoList.map(task => (
        <ListTask
          key={task.id}
          task={task}
          editButtonStates={editButtonStates}
          onBlurDelEditInput={onBlurDelEditInput}
          onKeysDelEditInput={onKeysDelEditInput}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
          onAddEditInput={onAddEditInput}
          onDeleteEditInput={onDeleteEditInput}
          onChangeValue={onChangeValue}
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
  onBlurDelEditInput: PropTypes.func,
  onKeysDelEditInput: PropTypes.func,
  onToggleTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onDeleteEditInput: PropTypes.func,
  onChangeValue: PropTypes.func,
  onAddEditInput: PropTypes.func,
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
  onBlurDelEditInput: PropTypes.func,
  onKeysDelEditInput: PropTypes.func,
  onToggleTodo: PropTypes.func,
  onDeleteTodo: PropTypes.func,
  onDeleteEditInput: PropTypes.func,
  onAddEditInput: PropTypes.func,
  onChangeValue: PropTypes.func,
  visibleTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};
