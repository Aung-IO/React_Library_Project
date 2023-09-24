//  themeContext

import { createContext, useReducer } from "react";

const ThemeContext = createContext();
//  themeContextProvider component

let ThemeReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload }; // { theme : 'light', theme : 'dark'} -> theme : 'dark'
      break;

    default:
      return state;
      break;
  }
};

const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, {
    theme: "light",
  });

  let changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  const isDark = state.theme === 'dark';

  return (
    <ThemeContext.Provider value={{ ...state, changeTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
