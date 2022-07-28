import React from 'react';

const ProductoDestacado = ({ imagen, descripcion, name }) => {
  return (
    <>
      <div className="text-center">
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: 40 + 'rem' }}
          src={imagen}
          alt={name}
        />
      </div>
      <p>{descripcion}</p>
      <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
        View movie detail
      </a>{' '}
    </>
  );
};

export default ProductoDestacado;
