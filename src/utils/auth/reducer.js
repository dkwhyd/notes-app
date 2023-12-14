// import { getInitialData } from '../index';

const initialState = localStorage.getItem('accessToken')
  ? JSON.parse(localStorage.getItem('accessToken'))
  : null;

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      localStorage.setItem(
        'accessToken',
        JSON.stringify(action.token.accessToken),
      );
      return action.token.accessToken;

    case 'USER_LOGOUT':
      localStorage.setItem('accessToken', null);

      return null;
    default:
      return state;
  }
}

export default reducer;
