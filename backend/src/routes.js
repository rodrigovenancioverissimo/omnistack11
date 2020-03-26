const express = require('express');
const crypto = require('crypto');

const connecton = require('./database/connection')

const routes = express.Router();

routes.post('/ongs', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;
  const id = crypto.randomBytes(4).toString('HEX');
  
  await connecton('ongs').insert({
    id,
    name,
    email,
    whatsapp,
    city,
    uf,
  })

  return response.json({ id });
});

module.exports = routes;