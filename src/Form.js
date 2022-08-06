import React from 'react';
import FormField from './FormField';
import IconIdentity from './icons/identity.svg';
import './Form.css';

export default function Form({ onSubmit, onUpdate, isEmpty, setFormData }) {
  const change =
    (prop) =>
    ({ target }) =>
      setFormData((formData) => ({ ...formData, [prop]: target.value }));

  return (
    <form
      className='Form'
      style={isEmpty ? { filter: 'blur(4px)' } : { filter: 'blur(0px)' }}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h1 className='Form-h1-title'>Add or Update Employees.</h1>
      <div className='Form-FormField-name'>
        <FormField
          title='Name'
          type='text'
          isRequired={true}
          onChange={change('employee_name')}
          svg={IconIdentity}
        />
      </div>
      <div className='Form-FormField-salary'>
        <FormField
          title='Salary'
          type='number'
          isRequired={true}
          onChange={change('employee_salary')}
        />
      </div>
      <div className='Form-FormField-age'>
        <FormField
          title='Age'
          type='number'
          isRequired={true}
          onChange={change('employee_age')}
        />
      </div>
      <button
        className='Form-button Form-button-submit'
        onClick={() => {
          onSubmit();
        }}
      >
        Submit
      </button>
      <button
        className='Form-button Form-button-update'
        onClick={() => {
          onUpdate();
        }}
      >
        Update
      </button>
    </form>
  );
}
