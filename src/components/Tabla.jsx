import React, { useState, useEffect } from 'react';
import TableRow from './TablaRow';

function Tabla() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard')
      .then((response) => response.json())
      .then((data) => {
        if (data.data.products) {
          setProductos([...data.data.products]);
        } else {
          setProductos([]);
        }
      });
  }, []);

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
                {productos.length > 1 &&
                  productos.map((producto, index) => (
                    <TableRow
                      name={producto.name}
                      short_desc={producto.short_desc}
                      price={producto.price}
                      key={index}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabla;
