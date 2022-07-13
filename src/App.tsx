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

        <main>
          <Routes>
            <Route 
              path="/the-first-the-last_test-task" 
              element={<MainContent />} 
            />
            <Route 
              path="/the-first-the-last_test-task/menu" 
              element={<Menu />}
            />
            <Route 
              path="/the-first-the-last_test-task/additionalpage" 
              element={<AdditionalPage />}
            />
          </Routes>
        </main>
      </div>
    </MenuContext.Provider>
  );
}

export default App;
