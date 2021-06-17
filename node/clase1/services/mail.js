const nodemailer = require('nodemailer');


const send = async({to, subject = "Gracias por registrarte !!", html}) => {
    try {
        const transporter = nodemailer.createTransport({
            service: process.env.CORREO_SERVICE,   // servicio de mail a usar es: gmail
            auth: {
                user: process.env.CORREO_USER,     // casilla de correo que envia el email
                pass: process.env.CORREO_PASSWORD, //password
            },
            tls : {
                rejectUnauthorized: false,         // le digo a mi service que no tengo certificado de seguridad corriedo en el server de donde mando los mails 
            }
        });
        const mail = {
            from: '<noreply>remitente<noreply>',   //el remitente del mail
            to,         //a quien le estoy mandadndo el mail
            subject,   //asunto del mail
            html,      //el body del mail ( html: doc html, text: texto plano)
            //attachments : para mandar archivos
        }
        const envio =  await transporter.sendMail(mail);
        return envio.messageId;

    } catch (e) {
        console.log(e);
    }
}

module.exports = {send};