const express = require('express');



const app = express();


app.get('/teste', (req, res) => {
    const nome = req.query.nome;
    return res.status(200).send(`Hello ${nome}`);
});


app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    return res.status(200).send(`Buscando o usuario ${id}`);
});

app.listen(3000);
