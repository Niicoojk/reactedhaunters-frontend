import React, { useState, useEffect } from 'react';

function TotalUniverses() {
  const [dato, setDato] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard')
      .then((response) => response.json())
      .then((data) => {
        if (data.data.universes) {
          setDato([...data.data.universes]);
        } else {
          setDato([]);
        }
      });
  }, []);

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Universos
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {dato.length}
                </div>
              </div>
              <div className="col-auto">
                <i className="far fa-album-collection"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TotalUniverses;
