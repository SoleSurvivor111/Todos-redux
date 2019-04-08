import React from 'react';
import PropTypes from 'prop-types';
import style from 'Components/Header/Header.module.scss';

const Header = ({
  toggleAll, addTodo, addTask, all, completed,
}) => {
  const toggleAllBtn = all !== 0
        && (
          <div>
            <input
              id="toggle-all"
              className={style['header__toggle-all']}
              type="checkbox"
              checked={all === completed}
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

export default Header;

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
  toggleAll: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  all: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};
