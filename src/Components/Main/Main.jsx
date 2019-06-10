import React from 'react';
import PropTypes from 'prop-types';
import ListTask from 'Components/Main/Task';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    <TransitionGroup className="todo-list">
      {visibleTodoList.map(task => (
        <CSSTransition
          key={task.id}
          timeout={500}
          classNames="item"
        >
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
        </CSSTransition>
      ))}
    </TransitionGroup>
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
