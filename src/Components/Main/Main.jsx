import React from 'react';
import ListTask from 'containers/AddTodo';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Main = ({ todos, toggleTodo}) => (
  <section className="main">
    <ul className="todo-list">
      {todos.map(task => (
        <ListTask
          key={task.id}
          task={task}
          toggleTodo={toggleTodo}
        />
      ))}
    </ul>
  </section>
);
export default Main;

Main.propTypes = {

};
