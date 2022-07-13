import React, { useContext } from 'react';
import { MenuContext } from '../MenuContext';
import { Link } from 'react-router-dom';
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

          <Link to="/">
            <img 
              src={logo} 
              alt="logo" 
              className="header__logo"
            />
          </Link>

          <div className="header__menu">
            {isMenuShown
              ? (
                <Link
                  to="/"
                  onClick={() => setIsMenuShown(false)}
                >
                  X
                </Link>
              )
              : (
                <Link
                  to="menu"
                  className="header__menu-link"
                  onClick={() => setIsMenuShown(true)}
                >
                  <img src={menu} alt="menu button" />
                </Link>
            )}
          </div>
        </div>

        <Links />
      </div>
    </header>
  )
}
