import React from 'react';
import config from '../../Utils/config';


const Perro = ({ url }) => {
    const clickeado = () => {
        window.localStorage.setItem(config.llaveImagen, url);
    }

    return (
        <div className="perro" onClick={clickeado}>
            <img className="perro_imagen" src={url} alt="Foto de perro" />
        </div>
    );
};
 



export default Perro;