import React from 'react';
import './InfoCard.css';

export default function InfoCard({ user, title }) {
  const {
    id = '',
    employee_name: name = '',
    employee_salary: salary = '',
    employee_age: age = '',
  } = user;

  return (
    <table className='InfoCard'>
      <h1 className='InfoCard-heading'>Selected Employee:</h1>
      <th className='InfoCard-id-title'>
        <p>Employee ID:</p>
      </th>
      <td className='InfoCard-id'>
        <p>{id}</p>
      </td>

      <th className='InfoCard-name-title'>
        <p>Employee Name:</p>
      </th>
      <td className='InfoCard-name'>
        <p>{name}</p>
      </td>

      <th className='InfoCard-salary-title'>
        <p>Employee Salary:</p>
      </th>
      <td className='InfoCard-salary'>
        <p>{salary}</p>
      </td>

      <th className='InfoCard-age-title'>
        <p>Employee Age:</p>
      </th>
      <td className='InfoCard-age'>
        <p>{age}</p>
      </td>
    </table>
  );
}
