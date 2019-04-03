import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from 'Components/Footer/Filters/Filters';
import { connect } from 'react-redux';
import style from 'Components/Footer/Footer.module.scss';


const Footer = ( { tasks, todos } ) => {
  const footer = todos.length !== 0 && (
    <footer className={style.footer}>
      <span className={style['footer__todo-count']} />
      <Filters />
      <button
        type="button"
        className={style['footer__clear-completed']}
      />
    </footer>
  );
  return footer;
};

export default connect(state => ({ todos: state.todos }))(Footer);
