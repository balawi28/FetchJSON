import React from 'react';
import FormField from './FormField';
import IconIdentity from './icons/identity.svg';
import './Form.css';

export default function Form() {
  return (
    <form className='Form'>
      <h1 className='Form-h1-title'>Add or Update Employees.</h1>
      <div className='Form-FormField-name'>
        <FormField
          title='Name'
          type='text'
          isRequired={true}
          svg={IconIdentity}
        />
      </div>
      <div className='Form-FormField-salary'>
        <FormField title='Salary' type='text' isRequired={true} />
      </div>
      <div className='Form-FormField-age'>
        <FormField title='Age' type='text' isRequired={true} />
      </div>
      <button className='Form-button Form-button-submit'>Submit</button>
      <button className='Form-button Form-button-update'>Update</button>
    </form>
  );
}
