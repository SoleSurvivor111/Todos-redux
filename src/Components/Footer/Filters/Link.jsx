import React from 'react';
import PropTypes from 'prop-types';
import style from 'Components/Footer/Filters/Filters.module.scss';

const Link = ({
  children,
  active,
  onSetFilter,
}) => (
  <li className={style.li} key={33}>
    <a
      href="#/"
      className={active ? style.highlight : ''}
      onMouseDown={onSetFilter}
    >
      {children}
    </a>
  </li>
);
export default Link;

Link.propTypes = {
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onSetFilter: PropTypes.func.isRequired,
};
