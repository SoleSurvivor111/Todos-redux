import React from 'react';
import PropTypes from 'prop-types';
import Filters from 'Components/Footer/Filters/Filters';
import style from 'Components/Footer/Footer.module.scss';

const Footer = ({
  all,
  active,
  completed,
  onClearCompleted,
}) => {
  const theNumberOfActiveTasks = active === 1
    ? '1 item left' : `${active} items left`;

  const onClearCompletedBtn = (completed !== 0)
    && (
    <button
      type="button"
      className={style['footer__clear-completed']}
      onClick={onClearCompleted}
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
      {onClearCompletedBtn}
    </footer>
  );
  return footer;
};

export default Footer;

Footer.propTypes = {
  onClearCompleted: PropTypes.func.isRequired,
  all: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};
