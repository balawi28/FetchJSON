import React, { useState } from 'react';
import './FormField.css';
import { ReactComponent as Logo } from './icons/identity.svg';

export default function FormField({ title, type, isRequired, Icon }) {
  const [border, setBorder] = useState(false);

  function flipInputFocus() {
    setBorder(!border);
  }

  return (
    <div
      className='FormField'
      style={
        border
          ? { border: '4px solid #1779ce' }
          : { border: '4px solid transparent' }
      }
    >
      <label className='FormField-title' for={title}>
        {title}
      </label>
      <input
        className='FormField-input'
        type={type}
        name={title}
        id={title}
        required={isRequired}
        onFocus={flipInputFocus}
        onBlur={flipInputFocus}
      />
      <div className='FormField-icon-container'>
        <Logo className='FormField-icon' />
      </div>
    </div>
  );
}
