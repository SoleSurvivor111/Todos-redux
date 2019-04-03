import React from 'react';
import PropTypes from 'prop-types';
import style from 'Components/Footer/Filters/Filters.module.scss';

const Link = ({ children, active, setFilter }) => (
  <li className={style.li} key={33}>
    <a
      href="#/"
      className={active ? style.highlight : ''}
      onMouseDown={setFilter}
    >
      {children}
    </a>
  </li>
);
export default Link;
