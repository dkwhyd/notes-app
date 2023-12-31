import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../components/Button';
import Input from '../components/Input';
import InputBody from '../components/InputBody';

export default function AddNote() {
  const accessToken = useSelector((state) => state.auth);
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

  const handleSubmit = async (e) => {
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
      try {
        const response = await axios.post(
          'https://notes-api.dicoding.dev/v1/notes',
          {
            title: form.title,
            body: form.body,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          },
        );
        console.log(response);
      } catch (err) {
        console.log(err);
      }
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
      <h2>Add Note</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input
          type="text"
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

        {/* <InputCheckbox
          value={form.archived}
          onChange={(e) => setForm({ ...form, archived: e.target.checked })}
        /> */}

        <Button
          value="Add Note"
          type="submit"
          styleName="submit"
          onClick={() => null}
        />
      </form>
    </div>
  );
}
