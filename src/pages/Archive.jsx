import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NotesCard from '../components/NotesCard';
import { showFormattedDate } from '../utils';

export default function Archive() {
  const accessToken = useSelector((state) => state.auth);
  const [reload, setReload] = useState(false);

  const [notes, setNotes] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://notes-api.dicoding.dev/v1/notes/archived',
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      );
      if (result.data.status === 'success') {
        setNotes(result.data.data);
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
  const unarchiveNote = async (noteId) => {
    try {
      const result = await axios.post(
        `https://notes-api.dicoding.dev/v1/notes/${noteId}/unarchive`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken} `,
          },
        },
      );
      if (result.data.status === 'success') {
        setReload(!reload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Archived</h2>
      <div className="archivedContainer">
        {!notes ? (
          <div className="data-not-found">
            <p>Loading</p>
          </div>
        ) : (
          notes
          && notes.map((note) => (
            <NotesCard
              id={note.id}
              key={note.id}
              date={showFormattedDate(note.createdAt)}
              title={note.title}
              body={note.body}
              deleteHandler={() => deleteNotes(note.id)}
              otherNameHandler="Unarchived"
              otherHandler={() => unarchiveNote(note.id)}
            />
          ))
        )}
        {notes && notes.length <= 0 ? <p>tidak ada catatan </p> : null}
      </div>
    </div>
  );
}
