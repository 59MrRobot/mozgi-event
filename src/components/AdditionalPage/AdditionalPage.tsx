import React from 'react';
import { Header } from '../Header';
import './AdditionalPage.scss';

export const AdditionalPage: React.FC = () => {
  return (
    <div className="AdditionalPage">
      <Header />

      <div className="AdditionalPage__wrapper">
        <h2 className="AdditionalPage__title">Additional Page</h2>
      </div>
    </div>
  )
}
