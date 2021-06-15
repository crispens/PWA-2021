const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const fs = require('fs');
const sha1 = require('sha1');
const publicKey = fs.readFileSync('./keys/public.pem');
const singOptions = {expiresIn:"1h"};
const model = require('./../models/auth');
const createToken = (payload) => jwt.sign(payload, publicKey, singOptions);


const auth = async (req, res) => {
    try {
        let {username, pass} = req.body;
        pass = sha1(pass);
        const [user] = await model.isLogged(username, pass);
        console.log(user);
        // consulta de BDD me devuelve un RowDataPacket ([{}])
        // ! negado, !user (si no hay usuario)  !user.habilitado (si no esta habilitado)
        if (!user) res.sendStatus(401);
        if (!user.habilitado) res.send("Verifique su mail 📧");
        if (user.habilitado) {
            const token = createToken({id: user.id,});
            res.status(200).json({JWT : token, info: user});
        }
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}


router.post('/', auth)


module.exports = router;