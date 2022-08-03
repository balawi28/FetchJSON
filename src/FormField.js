import React from 'react';
import './FormField.css';
import { ReactComponent as Logo } from './icons/identity.svg';

export default function FormField({ title, type, isRequired, Icon }) {
  return (
    <div className='FormField'>
      <label className='FormField-title' for={title}>
        {title}
      </label>
      <input
        className='FormField-input'
        type={type}
        name={title}
        id={title}
        required={isRequired}
      />
      <div className='FormField-icon-container'>
        <Logo className='FormField-icon' />
      </div>
    </div>
  );
}
