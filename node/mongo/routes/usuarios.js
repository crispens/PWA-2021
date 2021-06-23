const express = require('express');
const router = express.Router();
const model = require('../models/usuarios');


const get = (req, res) => 
   model.get({}).then(response => res.json(response)).catch((err) => res.status(500).json(err));

const single = (req, res) => 
    model.get({condicion : {_id : `ObjectId(${req.params.id})`}, fields : {edad: false}}).then(response => res.json(response)).catch((err) => res.status(500).json(err));
// con FIELDS evito que aparezca un dato, poniendo en este caso EDAD en FALSE (evita que edad aparezca)

const create = (req, res) => {
    model.create(req.body).then(response => res.json(response)).catch((err) => res.status(500).json(err));
}






router.get('/all', get);
router.get('/single/:id', single);
router.post('/create', create);


module.exports = router;