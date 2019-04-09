import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/Header/Header';
import Main from 'Components/Main/Main';
import Footer from 'Components/Footer/Footer';
import style from 'Components/App.module.scss';

const App = ({
  toggleAll, addTodo, addTask, visibleTodoList, editButtonStates,
  blurDelEditInput, keysDelEditInput, toggleTodo, deleteTodo, deleteEditInput,
  changeValue, addEditInput, all, active, completed, clearCompleted,
}) => (
  <div className="container">
    <div className={style['todos-logo']}>
      <h1 className={style['todos-logo__h1']}>TODOS</h1>
    </div>
    <section className={style.todoapp}>
      <Header
        all={all}
        completed={completed}
        toggleAll={toggleAll}
        addTodo={addTodo}
        addTask={addTask}
      />
      <Main
        visibleTodoList={visibleTodoList}
        editButtonStates={editButtonStates}
        blurDelEditInput={blurDelEditInput}
        keysDelEditInput={keysDelEditInput}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        addEditInput={addEditInput}
        deleteEditInput={deleteEditInput}
        changeValue={changeValue}
      />
      <Footer
        all={all}
        active={active}
        completed={completed}
        clearCompleted={clearCompleted}
      />
    </section>
  </div>
);
export default App;
App.propTypes = {
  addTask: PropTypes.func,
  toggleAll: PropTypes.func,
  addTodo: PropTypes.func,
  all: PropTypes.number,
  active: PropTypes.number,
  completed: PropTypes.number,
  clearCompleted: PropTypes.func,
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

App.defaultProps = {
  addTask: PropTypes.func,
  toggleAll: PropTypes.func,
  addTodo: PropTypes.func,
  all: PropTypes.number,
  active: PropTypes.number,
  completed: PropTypes.number,
  clearCompleted: PropTypes.func,
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
