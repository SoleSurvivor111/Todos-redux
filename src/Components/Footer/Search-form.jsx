import React from 'react';
import PropTypes from 'prop-types';
import style from 'Components/Footer/Search-form.module.scss';

const SearchForm = ({ onFindTodo }) => (
  <div className={style['search-form']}>
    <input
      type="text"
      className={style['search-field']}
      placeholder="type to search"
      onChange={onFindTodo}
    />
    <div
      className={style['search-icon']}
    />
  </div>
);
export default SearchForm;

SearchForm.propTypes = {
  onFindTodo: PropTypes.func.isRequired,
};
