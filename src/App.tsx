import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { AdditionalPage } from './components/AdditionalPage';
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { Menu } from './components/Menu';
import { MenuContext } from './components/MenuContext';
// import barba from '@barba/core';

const App: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <MenuContext.Provider value={{
      isMenuShown,
      setIsMenuShown,
    }}>
      <div className="App">
        <Header />

        <Routes>
          <Route 
            path="/mongi-events" 
            element={<MainContent />} 
          />
          <Route 
            path="/menu" 
            element={<Menu />}
          />
          <Route 
            path="/additionalpage" 
            element={<AdditionalPage />}
          />
        </Routes>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
