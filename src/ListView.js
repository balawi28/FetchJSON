import React from 'react';
import './ListView.css';
import _ from 'lodash';

export default function ListView({ users, displayCard }) {
  return (
    <div className='ListView'>
      {users.length > 0 && (
        <table className='ListView-table'>
          {_.map(users, (user) => (
            <tr
              className='ListView-table-element'
              key={user.id}
              onClick={(event) => displayCard(event, user.id)}
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
