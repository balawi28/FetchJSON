import React from 'react';
import FormField from './FormField';
import IconIdentity from './icons/identity.svg';
import './Form.css';

export default function Form() {
  return (
    <form className='Form'>
      <FormField
        className='Form-FormField-name'
        title='Name'
        type='text'
        isRequired={true}
        svg={IconIdentity}
      />
      <FormField
        className='Form-FormField-salary'
        title='Salary'
        type='text'
        isRequired={true}
      />
      <FormField
        className='Form-FormField-age'
        title='Age'
        type='text'
        isRequired={true}
      />
      <button className='Form-button-submit'>Submit</button>
      <button className='Form-button-update'>Update</button>
    </form>
  );
}
