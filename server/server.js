require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('get Mia Khalifa');
});

app.post('/usuario', function(req, res) {
    const body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } else {
        res.json({
            persona: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {
    const id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function(req, res) {
    res.json('delete Mia Khalifa');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});