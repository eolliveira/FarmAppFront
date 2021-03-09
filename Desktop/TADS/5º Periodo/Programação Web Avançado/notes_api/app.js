const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const usuario = require('./rotas/usuario');
const nota = require('./rotas/nota');
const checkList = require('./rotas/CheckList');
const tag = require('./rotas/tag');
const port = 3000;

app.use(bodyParser.json());


app.use('/usuario', usuario);
app.use('/nota', nota);
app.use('/tag', tag);
app.use('/checkList', checkList)

app.listen(port, () => {
    console.log(`Aplicação esta rodando em http://localhost:${port}`);
});