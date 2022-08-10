import React from 'react';
import Remove from '../../icons/remove.svg';
import './BurgerElement.css';

export default function BurgerElement({ image, text, RemoveElement }) {
  return (
    <div className='BurgerElement'>
      <img
        className='BurgerElement-Remove'
        src={Remove}
        onClick={RemoveElement}
      />
      <div className='BurgerElement-Text'>{text}</div>
      <img className='BurgerElement-Image' src={image} />
    </div>
  );
}
