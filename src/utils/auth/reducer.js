// import { getInitialData } from '../index';

const initialState = localStorage.getItem('auth')
  ? JSON.parse(localStorage.getItem('auth'))
  : { token: null };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      localStorage.setItem('auth', JSON.stringify(action.token));
      return { token: action.token };

    case 'USER_LOGOUT':
      return { token: null };

    default:
      return state;
  }
}

export default reducer;
