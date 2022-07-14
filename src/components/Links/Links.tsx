import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuContext } from '../MenuContext';
import './Links.scss';

export const Links: React.FC = () => {
  const { isMenuShown, setIsMenuShown } = useContext(MenuContext);

  return isMenuShown 
    ? (
      <nav className="links links--menu">
        <ul className="links__list links__list--menu">
          <li className="links__item links__item--menu">
            <NavLink 
              to="additionalpage"
              className="links__link"
              onClick={() => setIsMenuShown(false)}
            >
              where?
            </NavLink>
          </li>
          <li className="links__item links__item--menu">
            <NavLink 
              to="additionalpage"
              className="links__link"
              onClick={() => setIsMenuShown(false)}
            >
              who?
            </NavLink>
          </li>
          <li className="links__item links__item--menu">
            <NavLink 
              to="additionalpage"
              className="links__link"
              onClick={() => setIsMenuShown(false)}
            >
              what?
            </NavLink>
          </li>
        </ul>
      </nav>
    )
    : (
      <nav className="links">
        <ul className="links__list">
          <li className="links__item">
            <NavLink 
              to="additionalpage"
              className="links__link" 
            >
              where?
            </NavLink>
          </li>
          <li className="links__item">
            <NavLink 
              to="additionalpage"
              className="links__link"
            >
              who?
            </NavLink>
          </li>
          <li className="links__item">
            <NavLink 
              to="additionalpage"
              className="links__link"
            >
              what?
            </NavLink>
          </li>
        </ul>
      </nav>
    );
}