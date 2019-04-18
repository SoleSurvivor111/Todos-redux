import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/Header/Header';
import Main from 'Components/Main/Main';
import Footer from 'Components/Footer/Footer';
import SearchForm from 'Components/Footer/Search-form';
import style from 'Components/App.module.scss';

const App = ({
  toggleAll, addTodo, addTask, visibleTodoList, editButtonStates,
  blurDelEditInput, keysDelEditInput, toggleTodo, deleteTodo, deleteEditInput,
  changeValue, addEditInput, all, active, completed, clearCompleted, findTodo,
}) => (
  <div className="container">
    <div className={style['todos-logo']}>
      <h1 className={style['todos-logo__h1']}>TODOS</h1>
    </div>
    <section className={style.todoapp}>
      <Header
        all={all}
        completed={completed}
        onFindTodo={findTodo}
        onToggleAll={toggleAll}
        onAddTodo={addTodo}
        onAddTask={addTask}
      />
      <Main
        visibleTodoList={visibleTodoList}
        editButtonStates={editButtonStates}
        onBlurDelEditInput={blurDelEditInput}
        onKeysDelEditInput={keysDelEditInput}
        onToggleTodo={toggleTodo}
        onDeleteTodo={deleteTodo}
        onAddEditInput={addEditInput}
        onDeleteEditInput={deleteEditInput}
        onChangeValue={changeValue}
      />
      <SearchForm
        onFindTodo={findTodo}
      />
      <Footer
        all={all}
        active={active}
        completed={completed}
        onClearCompleted={clearCompleted}
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
  findTodo: PropTypes.func,
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
  addTask: () => {},
  toggleAll: () => {},
  addTodo: () => {},
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
  blurDelEditInput: () => {},
  keysDelEditInput: () => {},
  toggleTodo: () => {},
  deleteTodo: () => {},
  deleteEditInput: () => {},
  findTodo: () => {},
  changeValue: () => {},
  addEditInput: () => {},
  visibleTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: '',
      id: '',
      checked: PropTypes.bool,
    }),
  ),
};
