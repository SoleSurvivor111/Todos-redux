import React from 'react';
import ListTask from 'Components/Main/Task';
import PropTypes from 'prop-types';

const Main = ({
  visibleTodoList,
  editButtonStates,
  onToggleTodo,
  onDeleteTodo,
  onAddEditInput,
  onDeleteEditInput,
  onChangeValue,
}) => (
  <section className="main">
    <ul className="todo-list">
      {visibleTodoList.map(task => (
        <ListTask
          key={task.id}
          task={task}
          editButtonStates={editButtonStates}
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
  editButtonStates: PropTypes.shape({
    text: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onToggleTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onDeleteEditInput: PropTypes.func.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  onAddEditInput: PropTypes.func.isRequired,
  visibleTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ),
};
