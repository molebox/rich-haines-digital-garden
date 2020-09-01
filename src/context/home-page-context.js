import React from 'react';

export const HomePageStateContext = React.createContext(null);
export const HomePageDispatchContext = React.createContext(null);

const initialState = {
  onCrosses: false,
  onDotsBox: false,
  onFourDotsDiagonal: false,
  onFourDotsHorizontal: false,
  onSemiCircle: false,
  onSingleCrossLarge: false,
  onSingleCrossSmall1: false,
  onSingleCrossSmall2: false,
  onSun: false,
  onTriangle: false,
  onZigZags: false,
};

const homePageReducer = (state, action) => {
  const { type, payload } = action;
  return { ...state, [type]: payload };
};

const HomePageProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(homePageReducer, initialState);

  return (
    <HomePageDispatchContext.Provider value={dispatch}>
      <HomePageStateContext.Provider value={state}>
        {children}
      </HomePageStateContext.Provider>
    </HomePageDispatchContext.Provider>
  );
};

export default HomePageProvider;
