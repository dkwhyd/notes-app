import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { showFormattedDate } from '../utils';
import NotesCard from '../components/NotesCard';

function Notes() {
  const accessToken = useSelector((state) => state.auth);
  const [reload, setReload] = useState(false);
  const [notes, setNotes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        'https://notes-api.dicoding.dev/v1/notes',
        {
          headers: {
            Authorization: `Bearer ${accessToken} `,
          },
        },
      );
      // console.log(response.data);
      if (response.data.status === 'success') {
        setNotes(response.data.data);
      }
    };

    fetchData();
  }, [reload]);

  const deleteNotes = async (id) => {
    try {
      const result = await axios.delete(
        `https://notes-api.dicoding.dev/v1/notes/${id}`,
        { headers: { Authorization: `Bearer ${accessToken}` } },
      );
      if (result.data.status === 'success') {
        setReload(!reload);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const archiveNotes = async (noteId) => {
    try {
      const result = await axios.post(
        `https://notes-api.dicoding.dev/v1/notes/${noteId}/archive`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(result);
      setReload(!reload);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(notes);
  return (
    <div>
      <div>
        <h2>Catatan Aktif</h2>

        <div className="notesContainer">
          {notes
            && notes.map((note) => (
              <NotesCard
                id={note.id}
                key={note.id}
                date={showFormattedDate(note.createdAt)}
                title={note.title}
                body={note.body}
                deleteHandler={() => deleteNotes(note.id)}
                otherNameHandler="Archived"
                otherHandler={() => archiveNotes(note.id)}
              />
            ))}
          {notes ? <p>tidak ada catatan </p> : null}
        </div>
      </div>
    </div>
  );
}

export default Notes;
