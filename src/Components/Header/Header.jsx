import React from 'react';
import PropTypes from 'prop-types';
import style from 'Components/Header/Header.module.scss';

const Header = ({
  onToggleAll, onAddTodo, onAddTask, all, completed,
}) => {
  const toggleAllBtn = all !== 0
        && (
          <div>
            <input
              id="toggle-all"
              className={style['header__toggle-all']}
              type="checkbox"
              checked={all === completed}
              onMouseDown={onToggleAll}
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
        onKeyDown={e => onAddTask(e, onAddTodo)}
      />
    </header>
  );
};

export default Header;

Header.propTypes = {
  onAddTask: PropTypes.func.isRequired,
  onToggleAll: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  all: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};
