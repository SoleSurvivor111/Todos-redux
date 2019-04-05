import React from 'react';
import ListTask from 'containers/AddTodo';
import PropTypes from 'prop-types';

const Main = ({ todos }) => (
  <section className="main">
    <ul className="todo-list">
      {todos.map(task => (
        <ListTask
          key={task.id}
          task={task}
        />
      ))}
    </ul>
  </section>
);
export default Main;

Main.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
      checked: PropTypes.bool,
    }),
  ),
};

Main.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
      checked: PropTypes.bool,
    }),
  ),
};
