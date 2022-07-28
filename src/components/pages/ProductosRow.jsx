import React from 'react';

const ProductosRow = ({ image, name, short_desc, price }) => {
  return (
    <div class="col">
      <div class="card h-100">
        <div>
          <img src={image} class="card-img-top" alt={name} />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{short_desc}</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">$ {price}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductosRow;
