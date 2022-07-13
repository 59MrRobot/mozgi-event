import React from 'react'
import { Header } from '../Header';
import { Links } from '../Links';
import './Menu.scss';

export const Menu: React.FC = () => {
  return (
    <div className="Menu">
      <Header />

      <Links />
    </div>
  )
}
