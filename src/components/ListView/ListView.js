import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';
import './ListView.css';

export default function ListView({ fillCard }) {
  const usersList = useSelector((state) => state.usersList.value);

  return (
    <div className='ListView'>
      {usersList.length > 0 && (
        <table className='ListView-table'>
          {_.map(usersList, (user) => (
            <tr
              className='ListView-table-element'
              key={user.id}
              onClick={(event) => fillCard(event, user.id)}
            >
              <td>
                <p>{user.employee_name}</p>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}
