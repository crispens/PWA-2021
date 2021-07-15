import React from 'react';


const Listado = ({ usuarios }) => {
    return (
        <>
        <table className="table text-white">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Apellido</th>
                    <th scope="col">Departamento</th>
                    <th scope="col">Nacionalidad</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map (({id, nombre, apellido, departamento, nacionalidad}) => (
                        <tr key={id}>
                            <th scope="row">{id}</th>
                            <th>{nombre}</th>
                            <th>{apellido}</th>
                            <th>{departamento}</th>
                            <th>{nacionalidad}</th>
                        </tr>
                    )
                )}
            </tbody>
        </table>
        </>
    );
}
 
export default Listado;