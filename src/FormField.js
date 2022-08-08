import React, { useState } from 'react';
import './FormField.css';
import { ReactComponent as Logo } from './icons/identity.svg';

export default function FormField({
  title,
  type,
  isRequired,
  onChange,
  autoFocus,
  value,
}) {
  const [border, setBorder] = useState(false);

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
        onChange={onChange}
        onFocus={() => setBorder(!border)}
        onBlur={() => setBorder(!border)}
        autoFocus={autoFocus}
        value={value}
      />
      <div className='FormField-icon-container'>
        <Logo className='FormField-icon' />
      </div>
    </div>
  );
}
