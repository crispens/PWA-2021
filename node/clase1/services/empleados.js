const {create, createImagen} = require('./../models/empleados');
const {imgFile} = require('./../utils/fileHandler');


const createEmp = async (body, file) => {
    try {
    const [id_empleado] = await create(body);
    const uid = imgFile(file);
    const obj = {
        id_empleado,
        uid
    }
    const id = await createImagen(obj);
    return id;
    }
    catch (e) {
        throw e;
    }
}

module.exports = {createEmp};