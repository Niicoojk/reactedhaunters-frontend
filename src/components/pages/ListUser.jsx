import React, { useEffect, useState } from 'react';
import ListaUserRow from './ListaUserRow';

const ListUser = () => {
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard')
      .then((response) => response.json())
      .then((data) => {
        if (data.data.users) {
          setUsuario([...data.data.users]);
        } else {
          setUsuario([]);
        }
      });
  }, []);
  return (
    <>
      <div className="container-fluid ">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800 ">Usuarios</h1>
        </div>
        <div className="container-fluid">
          <div className="card shadow mb-4">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Usuario</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {usuario.length > 1 &&
                      usuario.map((usuario, index) => (
                        <ListaUserRow
                          first_name={usuario.first_name}
                          user_name={usuario.user_name}
                          email={usuario.email}
                          key={index}
                        />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUser;
