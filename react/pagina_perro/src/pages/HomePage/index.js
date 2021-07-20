import React, { useState } from 'react';
import ListaDePerros from '../../components/ListaPerros';
import useHttp from '../../Utils/useHttp';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


const HomePage = (props) => {

    const imagenesPorPagina = 9;
    const cantidad = 45;
    const url = `https://dog.ceo/api/breeds/image/random/${cantidad}`;

    const [error, listaDeImg, loading] = useHttp({ url });

    const [ pagina, setPagina ] = useState(1);


    const ultimo = imagenesPorPagina * pagina;
    const primero = ultimo - imagenesPorPagina;

    const partido = listaDeImg.slice(primero, ultimo);


    const irSiguiente = () => {
        const ultimo = cantidad / imagenesPorPagina;
        if (pagina !== ultimo) setPagina(pagina + 1);
    };

    const irVolver = () => {
        if (pagina !== 1) setPagina(pagina - 1);
    };

    const verImagen = () => {
        props.history.push('/perro')
    };

    if(error) {
        return <Error />
    };

    const render = () => {
        return(
            <>
                <ListaDePerros click={verImagen} data={partido} />
                <div className="container">
                    <div className="row offset-6">
                        <div className="papapa mt-2">
                        { pagina }
                        </div>
                    </div>
                    <div className="row offset-5 mt-2">
                        <div className="col-4">           
                            <button className="buttonA" onClick= {irVolver}>Volver</button>
                            <button className="buttonA" onClick= {irSiguiente}>Siguiente</button>
                        </div>
                    </div>
                </div>

            </>
        );
    };    


    return loading ? <Loading /> : (
        render()
    );

}

export default HomePage;