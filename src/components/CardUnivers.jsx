import React from 'react';

const CardUnivers = ({ universe }) => {
  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card bg-dark text-white shadow">
          <div className="card-body">{universe}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CardUnivers;
