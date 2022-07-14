import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../MenuContext';
import './Links.scss';
import cn from 'classnames';

export const Links: React.FC = () => {
  const { isMenuShown } = useContext(MenuContext);

  return (
    <nav className={cn(
      'links',
      { 'links--menu': isMenuShown },
    )}>
      <ul className="links__list">
        <li className="links__item">
          <NavLink 
            to="/additionalpage"
            className="links__link" 
          >
            where?
          </NavLink>
        </li>
        <li className="links__item">
          <NavLink 
            to="/additionalpage"
            className="links__link"
          >
            who?
          </NavLink>
        </li>
        <li className="links__item">
          <NavLink 
            to="/additionalpage"
            className="links__link"
          >
            what?
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}