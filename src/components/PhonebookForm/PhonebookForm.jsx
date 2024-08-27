import React, { useState } from 'react';
import './PhonebookForm.module.css';

export const PhonebookForm = ({ handleFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="tel"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Phone Number"
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};