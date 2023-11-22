import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { showFormattedDate } from '../utils';
import NotFound from '../components/NotFound';
import Button from '../components/Button';
import NotesBody from '../components/NotesBody';
import NotesDate from '../components/NotesDate';
import NotesTitle from '../components/NotesTitle';

export default function NotesDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notes = useSelector((state) => state.notes);

  const filterNotes = notes.filter((note) => note.id == id)[0];

  return (
    <div>
      {filterNotes && filterNotes ? (
        <div className="detail">
          <NotesTitle title={filterNotes.title} id={filterNotes.id} />
          <NotesDate date={showFormattedDate(filterNotes.createdAt)} />
          <NotesBody body={filterNotes.body} />
          <Button
            type="submit"
            value="Delete"
            onClick={() => {
              navigate('/');
              dispatch({
                type: 'REMOVE_NOTE',
                id: filterNotes.id,
              });
            }}
            styleName="delete"
          />
          <Button
            type="submit"
            value={filterNotes.archived ? 'Unarchived' : 'Archived'}
            onClick={() => {
              dispatch({
                type: `${
                  filterNotes.archived ? 'UNARCHIVED_NOTE' : 'ARCHIVE_NOTE'
                }`,
                id: filterNotes.id,
              });
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
