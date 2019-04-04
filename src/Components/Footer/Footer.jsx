import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from 'Components/Footer/Filters/Filters';
import { connect } from 'react-redux';
import { clearCompleted } from 'actions/footer';
import style from 'Components/Footer/Footer.module.scss';


const Footer = ({ todos, clear }) => {
  const all = todos.length;
  const active = todos.filter(task => !task.checked).length;
  const theNumberOfActiveTasks = active === 1
    ? '1 item left' : `${active} items left`;

  const clearCompletedBtn = (all - active !== 0)
    && (
    <button
      type="button"
      className={style['footer__clear-completed']}
      onClick={() => clear()}
    >
    Clear completed
    </button>
    );
  const footer = all !== 0 && (
    <footer className={style.footer}>
      <span className={style['footer__todo-count']}>
        {theNumberOfActiveTasks}
      </span>
      <Filters />
      {clearCompletedBtn}
    </footer>
  );
  return footer;
};
const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearCompleted()),
});
export default connect(state => ({ todos: state.todos }), mapDispatchToProps)(Footer);
