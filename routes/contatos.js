const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Esta é a página que verão os contatos da minha API');
});

router.get('/:id', (req, res) => {
  res.send(`Usuário de id ${req.params.id}`);
});

router.post('/', (req, res) => {
  const {texto} = req?.body;
  res.json({recebido: texto});
});

module.exports = router;