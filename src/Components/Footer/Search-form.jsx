import React from 'react';
import PropTypes from 'prop-types';
import style from 'Components/Footer/Search-form.module.scss';

const SearchForm = ({ findTodo }) => (
  <div className={style['search-form']}>
    <input
      type="text"
      className={style['search-field']}
      placeholder="type to search"
      onChange={e => findTodo(e.target.value)}
    />
    <div
      className={style['search-icon']}
    />
  </div>
);
export default SearchForm;
SearchForm.propTypes = {
  findTodo: PropTypes.func.isRequired,
};
