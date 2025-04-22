require('dotenv').config();

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}

app.use(cors(corsOptions));
app.use(express.json());

app.post('/send-email', async (req, res) => {

    console.log("Se hizo POST a /send-email");
    console.log("Body recibido:", req.body);

    const { tipo, ...formulario } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: "dtc037.ferozo.com",
            port: 465, // <- PUERTO TLS
            secure: true, // <- MUY IMPORTANTE
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false, // permite cert dudoso
            },
        });

        const camposHtml = Object.entries(formulario).map(([key, value]) => {
            return `<p><strong>${key}:</strong> ${value}</p>`
        } ).join(' ');

        await transporter.sendMail({
            from: `"Consulta Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: tipo ? `Nueva consulta: ${tipo}` : 'Nueva consulta desde la web',
            html: camposHtml, 
        });

        res.status(200).send({ success: true });
    } catch (err) {
        console.error("Error al enviar mail", err);
        res.status(500).send({ success: false, error: "Error al enviar el mail" })
    }

});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


/*from: `"Consulta Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: "Nueva consulta desde la web",
            html: `<p><strong>Nombre:</strong>${name}</p>
                <p><strong>Email:</strong>${email}</p>
                <p><strong>Teléfono:</strong>${number}</p>
                <p><strong>¿Como nos conociste?</strong>${know}</p>
                <p><strong>Consulta</strong>${message}</p>`*/
