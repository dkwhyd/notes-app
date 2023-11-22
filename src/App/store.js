import { configureStore } from '@reduxjs/toolkit';

import NoteReducer from '../utils/notes/reducer';

const store = configureStore({
  reducer: {
    notes: NoteReducer,
  },
});
export default store;
