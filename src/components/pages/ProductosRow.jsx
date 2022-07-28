import React from 'react';

const ProductosRow = ({ image, name, short_desc, price }) => {
  return (
    <div className="col">
      <div className="card h-100">
        <div>
          <img
            src={`/img/products/${image}`}
            className="card-img-top"
            alt={name}
          />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{short_desc}</p>
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
