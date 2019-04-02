import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from 'actions';
import style from 'Components/Header/Header.module.scss';

const Header = ({ dispatch }, todos) => (
  <header className={style.header}>
    {}
    <input
      className={style['header__new-todo']}
      placeholder="What needs to be done?"
      defaultValue="sdfsdf"
      autoFocus
      // onChange={onInput}
      onKeyDown={(e) => {
        const enterKey = 13;
        if ((e.target.value.trim() !== '')
        && (e.which === enterKey || e.keyCode === enterKey)) {
          dispatch(addTodo(e.target.value));
          console.log(todos);
          e.target.value = '';
        }
      }}
    />
  </header>
);
export default connect()(Header);

Header.propTypes = {

};
