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
  addTask: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  all: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  editButtonStates: PropTypes.objectOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  blurDelEditInput: PropTypes.func.isRequired,
  keysDelEditInput: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  deleteEditInput: PropTypes.func.isRequired,
  findTodo: PropTypes.func.isRequired,
  changeValue: PropTypes.func.isRequired,
  addEditInput: PropTypes.func.isRequired,
  visibleTodoList: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
    }),
  ),
};
