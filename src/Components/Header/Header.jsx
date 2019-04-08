import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from 'actions/header';
import style from 'Components/Header/Header.module.scss';

const addTask = (e, addTodo) => {
  const enterKey = 13;
  if ((e.target.value.trim() !== '')
  && (e.which === enterKey || e.keyCode === enterKey)) {
    addTodo(e.target.value);
    e.target.value = '';
  }
};

const Header = ({ toggleAll, addTodo, todos }) => {
  const completed = todos.filter(todo => todo.checked);
  const stateBtn = todos.length === completed.length;
  const toggleAllBtn = todos.length !== 0
        && (
          <div>
            <input
              id="toggle-all"
              className={style['header__toggle-all']}
              type="checkbox"
              checked={stateBtn}
              onMouseDown={() => toggleAll()}
            />
            <div
              className={style.header__label}
            />
          </div>
        );

  return (
    <header className={style.header}>
      {toggleAllBtn}
      <input
        className={style['header__new-todo']}
        placeholder="What needs to be done?"
        defaultValue=""
        autoFocus
        onKeyDown={e => addTask(e, addTodo)}
      />
    </header>
  );
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, actions)(Header);

Header.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  toggleAll: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

Header.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};
