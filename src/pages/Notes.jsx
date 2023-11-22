import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { showFormattedDate } from '../utils';
import Input from '../components/Input';
import NotesCard from '../components/NotesCard';

function Notes() {
  const noteState = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const search = searchParams.get('search');
    if (search) {
      setQuery(search);
    }
  }, []);

  const filteredNotes = noteState.filter(
    (note) => note.title.toLowerCase().includes(query.toLowerCase())
      || note.body.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    setSearchParams({
      search: query,
    });
  }, [query]);

  return (
    <div>
      <div>
        <h2>Catatan Aktif</h2>
        <div className="searchContainer">
          <Input
            label="Find Notes"
            type="text"
            value={query}
            placeholder="type title or notes"
            handleChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="notesContainer">
          {filteredNotes.filter((note) => !note.archived).length === 0 ? (
            <div className="data-not-found">
              <p>Tidak ada catatan</p>
            </div>
          ) : (
            filteredNotes
            && filteredNotes
              .filter((note) => !note.archived)
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
                  otherNameHandler="Archived"
                  otherHandler={() => dispatch({
                    type: 'ARCHIVE_NOTE',
                    id: note.id,
                  })}
                />
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notes;
