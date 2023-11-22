import { getInitialData } from '../index';

const initialState = getInitialData();

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const newId = +new Date();
      const newNote = {
        id: newId,
        title: action.title,
        archived: action.archived,
        body: action.body,
        createdAt: action.createdAt,
      };
      return [...state, newNote];

    case 'UPDATE_NOTE':
      return state.map((note) => (note.id === action.id ? action.note : note));

    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.id);

    case 'ARCHIVE_NOTE':
      return state.map((note) => (note.id === action.id ? { ...note, archived: true } : note));

    case 'UNARCHIVED_NOTE':
      return state.map((note) => (note.id === action.id ? { ...note, archived: false } : note));

    default:
      return state;
  }
}

export default reducer;
