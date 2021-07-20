import React from 'react';
import config from '../../Utils/config';

const ImagePage = (props) => {

    const url = window.localStorage.getItem(config.llaveImagen);


    const volver = () => {
        props.history.push('/')
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <img className="imagen" src={ url } alt="No se pudo encontrar la imagen"/>
            </div>
            <div className="row justify-content-center">
                <div className="col-1 ">
                    <button className="buttonA" onClick={volver}>Volver</button>
                </div>
            </div>
        </div>
    );
}
 
export default ImagePage;