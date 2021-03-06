import React, { useContext } from 'react';
import { MenuContext } from '../MenuContext';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import { Links } from '../Links';
import lang from '../../images/tongue.png';
import logo from '../../images/logo.svg';
import menu from '../../images/menu.svg';

export const Header: React.FC = () => {
  const { isMenuShown, setIsMenuShown } = useContext(MenuContext);

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__controls">
          <div className="header__lang">
            <img 
              src={lang} 
              alt="language icon"
              className="header__lang-image" 
            />
          </div>

          <NavLink to="/">
            <img 
              src={logo} 
              alt="logo" 
              className="header__logo"
            />
          </NavLink>

          <div className="header__menu">
            {isMenuShown
              ? (
                <button
                  type="button"
                  className="header__menu-button"
                  onClick={() => setIsMenuShown(false)}
                >
                  X
                </button>
              )
              : (
                <button
                  type="button"
                  className="header__menu-button"
                  onClick={() => setIsMenuShown(true)}
                >
                  <img src={menu} alt="menu button" />
                </button>
            )}
          </div>
        </div>

        <Links />
      </div>
    </header>
  )
}
