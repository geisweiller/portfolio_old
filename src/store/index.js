import { createStore } from 'redux';

const INITIAL_STATE = {
  darkMode: false,
};

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_DARKMODE_ON':
      return { darkMode: action.darkMode };

    case 'SET_DARKMODE_OFF':
      return { darkMode: action.darkMode };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
