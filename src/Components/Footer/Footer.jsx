import React from 'react';
import PropTypes from 'prop-types';
import Filters from 'Components/Footer/Filters/Filters';
import { connect } from 'react-redux';
import { clearCompleted } from 'actions/footer';
import style from 'Components/Footer/Footer.module.scss';

const Footer = ({ todos, clearList }) => {
  const all = todos.length;
  const active = todos.filter(task => !task.checked).length;
  const theNumberOfActiveTasks = active === 1
    ? '1 item left' : `${active} items left`;

  const clearCompletedBtn = (all - active !== 0)
    && (
    <button
      type="button"
      className={style['footer__clear-completed']}
      onClick={() => clearList()}
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
  clearList: () => dispatch(clearCompleted()),
});
const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);

Footer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
  clearList: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.string,
      checked: PropTypes.bool,
    }),
  ),
};
