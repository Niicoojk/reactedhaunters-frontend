import React from 'react';

const ListaUserRow = ({ first_name, user_name, email }) => {
  return (
    <tr>
      <th>{first_name}</th>
      <td>{user_name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default ListaUserRow;
