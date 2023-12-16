import { configureStore } from '@reduxjs/toolkit';

import NoteReducer from '../utils/notes/reducer';
import Auth from '../utils/auth/reducer';

const store = configureStore({
  reducer: {
    notes: NoteReducer,
    auth: Auth,
  },
});
export default store;
