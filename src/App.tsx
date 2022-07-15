import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { Menu } from './components/Menu';
import { AdditionalPage } from './components/AdditionalPage';
import { Header } from './components/Header';
import { MenuContext } from './components/MenuContext';
import './App.scss';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const location = useLocation();

  return (
    <MenuContext.Provider value={{
      isMenuShown,
      setIsMenuShown,
    }}>
      <>
        <Header />

        {isMenuShown && (
          <Menu />
        )}

        <AnimatePresence>
          <Routes location={location} key={location.key} >
            <Route 
              path="/" 
              element={<MainContent />}
            />
            <Route 
              path="additionalpage" 
              element={<AdditionalPage />}
            />
          </Routes>
        </AnimatePresence>
      </>
    </MenuContext.Provider>
  );
}

export default App;
