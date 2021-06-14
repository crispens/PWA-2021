const bd = require('../utils/bd');
const bdService = require("../utils/dbService");


const getAll = () => bd('producto as P').join('categorias as CAT', 'CAT.id', 'P.id_categoria').where({"P.habilitado" : 1}).select('P.nombre', 'CAT.nombre as nombreCategoria', 'P.precio', 'P.stock');
    // SELECT * FORM producto WHERE habilitado = 1
    // where en knex puede ser por objeto o escrito ({habilitado : 1}, ("habilitado", 1))

const create = (obj) => bdService.create("producto", obj);
    // INSERT INTO producto SET obj 

const single = (id) => bd('producto').where({"habilitado" : 1, id}).select('*');
    // SELECT * FROM producto WHERE hsbilitado = 1 AND id = id


const modify = (id, obj) => bdService.modify("producto", id, obj);





module.exports = {getAll, create, single, modify};