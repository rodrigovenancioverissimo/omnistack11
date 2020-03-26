const connecton = require('../database/connection')
const crypto = require('crypto');

module.exports = {
  async index(request, response) {
    const incidents = await connecton('incidents').select('*');
    return response.json(incidents);
  },

  async create(request, response) {
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
  },
};