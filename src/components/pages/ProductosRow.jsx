import React from 'react';

const ProductosRow = ({ image, name, short_desc, price }) => {
  return (
    <div className="col mt-2">
      <div className="card h-100" style={{ height: '400px', width: '300px' }}>
        <div className="mt-2">
          <img
            src={`http://localhost:3000/img/products/${image}`}
            className="card-img-top"
            alt={name}
            style={{ width: '300px', height: '300px' }}
          />
          <div className="card-body" style={{ height: 'auto' }}>
            <h5 className="card-title" style={{ height: 'auto' }}>
              {name}
            </h5>
            <p className="card-text" style={{ height: '100px' }}>
              {short_desc}
            </p>
          </div>
          <div className="card-footer">
            <small className="text-muted">$ {price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosRow;
