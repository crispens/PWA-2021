const Joi = require('@hapi/joi');

const schemas = {
    create : Joi.object().keys({
        nombre: Joi.string().min(3).max(40).required().messages({
            // -- ponemos el error en castellano --
            "any.required" : "El nombre es requerido",
            "string.max" : "Te pasaste del maximo de caractares",
            "string.min" : "Necesitas al menos 3 caracteres"
        }),
        apellido: Joi.string().required().messages({
            "any.required" : "El apellido es requerido"
        }),
    }),
    
    modify : Joi.object().keys({
        id: Joi.number().integer().required().messages({
            "any.required" : "Necesito un id"
        }),
        nombre: Joi.string().min(3).max(40).optional(),
        apellido: Joi.string().optional(),
    })
}

module.exports = schemas;