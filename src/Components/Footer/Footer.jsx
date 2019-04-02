import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from 'Components/Footer/Filters/Filters';
import style from 'Components/Footer/Footer.module.scss';


const Footer = () => {
  const footer = (
    <footer className={style.footer}>
      <span className={style['footer__todo-count']} />
      <Filters />
      <button
        type="button"
        className={style['footer__clear-completed']}
      />
    </footer>
  );
  return footer;
};

export default Footer;
