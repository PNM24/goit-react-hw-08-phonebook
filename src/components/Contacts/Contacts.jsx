import React from 'react';
import './Contacts.module.css';

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span className="contact-name">{name}</span>
          <span className="contact-number">{number}</span>
          <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};