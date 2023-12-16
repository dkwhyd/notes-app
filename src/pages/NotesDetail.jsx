import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { showFormattedDate } from '../utils';
import NotFound from '../components/NotFound';
import Button from '../components/Button';
import NotesBody from '../components/NotesBody';
import NotesDate from '../components/NotesDate';
import NotesTitle from '../components/NotesTitle';

export default function NotesDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth);
  const [data, setData] = useState();
  const [reload, setReload] = useState(false);

  // console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `https://notes-api.dicoding.dev/v1/notes/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        if (result.data.status === 'success') {
          setData(result.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [reload]);

  const deleteNotes = async (idNotes) => {
    try {
      await axios.delete(`https://notes-api.dicoding.dev/v1/notes/${idNotes}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
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
      if (result.data.status === 'success') {
        setReload(!reload);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {data && data ? (
        <div className="detail">
          <NotesTitle title={data.title} id={data.id} />
          <NotesDate date={showFormattedDate(data.createdAt)} />
          <NotesBody body={data.body} />
          <Button
            type="submit"
            value="Delete"
            onClick={() => {
              navigate('/');
              deleteNotes(data.id);
            }}
            styleName="delete"
          />
          <Button
            type="submit"
            value={data.archived ? 'Unarchived' : 'Archived'}
            onClick={() => {
              if (data.archived) {
                unarchiveNote(data.id);
              } else {
                archiveNotes(data.id);
              }
            }}
            styleName="archive"
          />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
}
