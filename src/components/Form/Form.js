import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormData } from '../../features/formData';
import FormField from '../FormField/FormField';
import './Form.css';

export default function Form({ onSubmit, onUpdate, isEmpty, setVisibleForm }) {
  const formData = useSelector((state) => state.formData.value);
  const dispatch = useDispatch();

  const change =
    (prop) =>
    ({ target }) => {
      dispatch(setFormData({ ...formData, [prop]: target.value }));
    };

  function isFilledForm() {
    return (
      formData.employee_name &&
      formData.employee_salary &&
      formData.employee_age
    );
  }
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
          autoFocus={true}
          value={formData.employee_name}
        />
      </div>

      <div className='Form-FormField-salary'>
        <FormField
          title='Salary'
          type='number'
          isRequired={true}
          onChange={change('employee_salary')}
          autoFocus={false}
          value={formData.employee_salary}
        />
      </div>

      <div className='Form-FormField-age'>
        <FormField
          title='Age'
          type='number'
          isRequired={true}
          onChange={change('employee_age')}
          autoFocus={false}
          value={formData.employee_age}
        />
      </div>

      <button
        className='Form-button Form-button-submit'
        onClick={() => {
          if (!isFilledForm) alert('Please fill the form.');
          onSubmit();
        }}
      >
        Submit
      </button>

      <button
        className='Form-button Form-button-update'
        onClick={() => {
          if (!isFilledForm) alert('Please fill the form.');
          onUpdate();
        }}
      >
        Update
      </button>

      <button
        className='Form-button Form-button-cancel'
        onClick={() => {
          setVisibleForm(false);
        }}
      >
        Cancel
      </button>
    </form>
  );
}
