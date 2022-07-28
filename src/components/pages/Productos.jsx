import React, { useState, useEffect } from 'react';
import ProductosRow from './ProductosRow';

const Productos = () => {
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
    <div className="container-fluid ">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 ">Productos</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.length > 0 &&
          productos.map((producto, index) => (
            <ProductosRow
              image={producto.image}
              name={producto.name}
              short_desc={producto.short_desc}
              price={producto.price}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default Productos;
