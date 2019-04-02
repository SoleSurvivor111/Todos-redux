import React from 'react';
import Header from 'Components/Header/Header';
import  VisibleTodoList from 'containers/VisibleTodoList';
import Footer from 'Components/Footer/Footer';
import style from 'Components/App.module.scss';

const App = () => (
  <div className="container">
    <div className={style['todos-logo']}>
      <h1 className={style['todos-logo__h1']}>TODOS</h1>
    </div>
    <section className={style.todoapp}>
      <Header />
      <VisibleTodoList />
      <Footer />
    </section>
  </div>
);
export default App;
