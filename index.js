const express = require('express');
const app = express();
const contatoRoutes = require("./routes/contatos");

app.use("/contatos", contatoRoutes);
app.use("contatos/:id", contatoRoutes);

app.get('/', (req, res) => {
  res.send('API rodando! Coloque as rotas corretamente');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app; 