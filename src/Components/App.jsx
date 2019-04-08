import React from 'react';
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

};
