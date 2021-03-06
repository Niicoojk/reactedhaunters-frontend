import React from 'react';

const ProductoDestacado = ({ imagen, descripcion, name }) => {
  return (
    <>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: '500px' }}
          src={`http://localhost:3000/img/products/${imagen}`}
          alt={name}
        />
      </div>
      <p>{descripcion}</p>
    </>
  );
};

export default ProductoDestacado;
