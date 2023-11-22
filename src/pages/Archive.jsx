import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotesCard from '../components/NotesCard';
import { showFormattedDate } from '../utils';

export default function Archive() {
  const noteState = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Archived</h2>
      <div className="archivedContainer">
        {noteState.filter((note) => note.archived === true).length === 0 ? (
          <div className="data-not-found">
            <p>Tidak ada catatan</p>
          </div>
        ) : (
          noteState
          && noteState
            .filter((note) => note.archived === true)
            .map((note) => (
              <NotesCard
                id={note.id}
                key={note.id}
                date={showFormattedDate(note.createdAt)}
                title={note.title}
                body={note.body}
                deleteHandler={() => dispatch({
                  type: 'REMOVE_NOTE',
                  id: note.id,
                })}
                otherNameHandler="Unarchived"
                otherHandler={() => dispatch({
                  type: 'UNARCHIVED_NOTE',
                  id: note.id,
                })}
              />
            ))
        )}
      </div>
    </div>
  );
}
