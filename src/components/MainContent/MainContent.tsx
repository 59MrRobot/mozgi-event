import React from 'react';
import './MainContent.scss';
import showreel from '../../images/showreel.svg';
import dot from '../../images/dot.svg';

export const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <div className="main-content">

        <div className="main-content__decoration">
          <div className="main-content__circle"></div>
          <div className="main-content__showreel">
            <img 
              src={showreel} 
              alt="showreel" 
              className="main-content__showreel-image"
            />
            <img 
              src={dot} 
              alt="black dot" 
              className="main-content__showreel-dot"
            />
          </div>
        </div>
      </div>

      <h1 className="main-content__title">Full-Cycle Event Agency</h1>
    </div>
  )
}
