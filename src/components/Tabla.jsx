import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import TableRow from './TablaRow';

const Tabla = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/store')
      .then((response) => response.json())
      .then((data) => {
        if (data.data.products) {
          setProductos([...data.data.products]);
        } else {
          setProductos([]);
        }
      });
  }, []);
  console.log(productos);

  render();
  return (
    <div className="container-fluid">
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>precio</th>
                </tr>
              </thead>
              <tbody>
                {/* productos.map((data, index) => (
                  <TableRow
                    name={data.name}
                    short_desc={data.short_desc}
                    price={data.price}
                    key={index}
                  />
                )) */}
              </tbody>
              <tfoot>
                <tr>
                  <th>Título</th>
                  <th>Duración</th>
                  <th>Rating</th>
                  <th>Género</th>
                  <th>Premios</th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabla;
