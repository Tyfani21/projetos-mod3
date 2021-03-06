
const express = require('express');
const app = express();
app.use(express.json());

const Conn = require('./models/conn/conn');

Conn("localhost",27017,"musicas");

const port = 3000;

const musicasRouter = require('./routers/musicas.routers');
app.use('/musicas',musicasRouter);

const filmeRouter = require('./routers/filmes.routers');
app.use('/filmes',filmeRouter);

app.listen(process.env.PORT || port, ()=> {
  console.info(`Servidor rodando na porta ${port}`);
});

