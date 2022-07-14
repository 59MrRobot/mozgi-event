import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
          <Link 
            to="additionalpage"
            className="links__link" 
          >
            where?
          </Link>
        </li>
        <li className="links__item">
          <Link 
            to="additionalpage"
            className="links__link"
          >
            who?
          </Link>
        </li>
        <li className="links__item">
          <Link 
            to="additionalpage"
            className="links__link"
          >
            what?
          </Link>
        </li>
      </ul>
    </nav>
  )
}