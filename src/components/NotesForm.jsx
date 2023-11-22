import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './Button';
import Input from './Input';
import InputBody from './InputBody';
import InputCheckbox from './InputCheckbox';

export default function NotesForm() {
  const dispatch = useDispatch();
  const [error, setError] = useState({
    title: '',
    body: '',
  });
  const maxTitleLength = 50;

  const [form, setForm] = useState({
    id: +new Date(),
    title: '',
    body: '',
    archived: false,
    createdAt: '',
  });

  const handleChange = (fields, e) => {
    setForm({
      ...form,
      [fields]: e.target.value,
    });

    setError({
      ...error,
      title: `karakter tersisa ${maxTitleLength - form.title.length}`,
    });

    if (form.title.length > 50) {
      setError({
        ...error,
        title: 'Judul catatan tidak boleh melebihi 50 karakter',
      });
    }
  };

  const handleSubmit = (e) => {
    const createdAt = new Date().toISOString();
    e.preventDefault();
    if (form.title.length < 1) {
      setError({ ...error, title: 'Title is empty' });
    } else if (form.body < 1) {
      setError({ ...error, body: 'Message is empty' });
    } else if (form.title.length > 50) {
      setError({
        ...error,
        title: 'Judul catatan tidak boleh melebihi 50 karakter',
      });
    } else {
      setError({ ...error, title: '', body: '' });
      dispatch({
        type: 'ADD_NOTE',
        title: form.title,
        body: form.body,
        archived: form.archived,
        createdAt,
      });
      // clear form
      setForm({
        title: '',
        body: '',
        archived: false,
        createdAt: '',
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <Input
          label="Title"
          value={form.title}
          placeholder="title"
          handleChange={(e) => handleChange('title', e)}
        />
        {error.title && <div className="error">{error.title}</div>}
        <InputBody
          value={form.body}
          handleChangeBody={(e) => handleChange('body', e)}
        />
        {error.body && <div className="error">{error.body}</div>}

        <InputCheckbox
          value={form.archived}
          onChange={(e) => setForm({ ...form, archived: e.target.checked })}
        />

        <Button value="Add Note" type="submit" className="submit" />
      </form>
    </div>
  );
}
