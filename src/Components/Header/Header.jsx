import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ENTER_KEY } from 'const';
import style from 'Components/Header/Header.module.scss';

class Header extends Component {
   handleAddTodo = (e) => {
     if ((e.target.value.trim() !== '')
    && (e.which === ENTER_KEY || e.keyCode === ENTER_KEY)) {
       const { onAddTodo } = this.props;
       onAddTodo(e.target.value);
       e.target.value = '';
     }
   };

   render() {
     const { all, completed, onToggleAll } = this.props;
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
           onKeyDown={this.handleAddTodo}
         />
       </header>
     );
   }
}
export default Header;
Header.propTypes = {
  onToggleAll: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  all: PropTypes.number.isRequired,
  completed: PropTypes.number.isRequired,
};
