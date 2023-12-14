import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import NotesBody from './NotesBody';
import NotesDate from './NotesDate';
import NotesTitle from './NotesTitle';

export default function NotesCard({
  id,
  title,
  date,
  body,
  otherNameHandler,
  otherHandler,
  deleteHandler,
}) {
  return (
    <div key={title} className="card">
      <NotesTitle title={title} id={id} />
      <NotesDate date={date} />
      <NotesBody body={body} />
      <Button
        value="Delete"
        onClick={deleteHandler}
        styleName="delete"
        type="submit"
      />
      <Button
        value={otherNameHandler}
        type="submit"
        onClick={otherHandler}
        styleName="archive"
      />
    </div>
  );
}
NotesCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  otherNameHandler: PropTypes.string.isRequired,
  otherHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
};
