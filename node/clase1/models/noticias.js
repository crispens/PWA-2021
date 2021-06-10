const noticias = [
    {
        id: 1,
        titulo:"se termino la pandemia",
        description: "ya todo el mundo esta vacunado",
        autor: "Marian",
        habilitado : 1
    },
    {
        id: 2,
        titulo: "Messi es el mejor",
        description: "Mesi es el mejor jugador del mundo",
        autor: "Leo Messi",
        habilitado : 1
    }
];


const getAll = () => noticias;
const getSingle = (id) => noticias.find((noticias) => noticias.id == id);
const create = (obj) => noticias.push(obj);
const del = (id, habilitado = 0) => {
    index = noticias.findIndex((noticias) => noticias.id == id);
    console.log(index, habilitado);
    noticias[index]["habilitado"] = habilitado;
    console.log(noticias);
}

module.exports = {getAll, getSingle, create, del};