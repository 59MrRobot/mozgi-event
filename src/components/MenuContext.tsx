import { createContext } from 'react';

export const MenuContext = createContext({
  isMenuShown: false,
  setIsMenuShown: (value: boolean) => {},
});