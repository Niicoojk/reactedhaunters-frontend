import React from 'react';

const TableRow = ({ name, short_desc, price }) => {
  return (
    <tr>
      <th>{name}</th>
      <td>{short_desc}</td>
      <td>{price}</td>
    </tr>
  );
};

export default TableRow;
