import React, { useState, useEffect } from 'react';

import CardCategory from './CardCategory';
import CardDataGeneral from './CardDataGeneral';
import CardUnivers from './CardUnivers';
import ProductoDestacado from './ProductoDestacado';

function ContentRowTop() {
  /*<!-- todo lo que esta aca lo tengo que traer de la API -->*/
  const [universos, setUniversos] = useState([]);
  const [tier, setTiers] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/api/store')
      .then((response) => response.json())
      .then((data) => {
        if (data.data.universes) {
          setUniversos([...data.data.universes]);
        } else {
          setUniversos([]);
        }
        if (data.data.tiers) {
          setTiers([...data.data.tiers]);
        } else {
          setTiers([]);
        }
        if (data.data.products) {
          setProductos([...data.data.products]);
        } else {
          setProductos([]);
        }
      });
  }, []);

  console.log(universos);
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">DHaunters</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <div className="row">
          {/*<!-- Movies in Data Base -->*/}
          <CardDataGeneral />
        </div>

        {/*<!-- Content Row Last Movie in Data Base -->*/}
        <div className="row">
          {/*<!-- Last Movie in DB -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Producto Destacado
                </h5>
                {productos.length > 1 &&
                  productos.map((producto, i) => {
                    return (
                      <ProductoDestacado
                        imagen={producto.image}
                        descripcion={producto.long_desc}
                        key={i}
                      />
                    );
                  })}
              </div>
              <div className="card-body"></div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!--Categorias -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Categorias
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {tier.length > 1 &&
                    tier.map((categoria, indx) => {
                      return (
                        <CardCategory value={categoria.value} key={indx} />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>

          {/*<!-Universos -->*/}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">
                  Universos
                </h5>
              </div>
              <div className="card-body">
                <div className="row">
                  {universos.length > 1 &&
                    universos.map((universo, i) => {
                      return (
                        <CardUnivers universe={universo.universe} key={i} />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
