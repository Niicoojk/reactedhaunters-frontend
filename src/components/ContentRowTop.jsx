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

  const productoUnico = productos.filter(
    (producto) => producto.product_id === 17
  );

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard')
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
              <div
                className="card-header py-3"
                style={{ width: 'auto', height: 'auto' }}
              >
                <h5 className="m-0 font-weight-bold text-gray-800 ">
                  Producto Destacado
                </h5>
                {productos.length > 1 &&
                  productoUnico.map((producto, i) => {
                    return (
                      <ProductoDestacado
                        imagen={producto.image}
                        descripcion={producto.short_desc}
                        name={producto.name}
                        key={i}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
          {/*<!-- End content row last movie in Data Base -->*/}

          {/*<!--Categorias -->*/}

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

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">Categorias</h5>
          </div>
          <div className="card-body">
            <div className="row">
              {tier.length > 1 &&
                tier.map((categoria, indx) => {
                  return <CardCategory value={categoria.value} key={indx} />;
                })}
            </div>
          </div>
        </div>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
