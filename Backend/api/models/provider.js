const mongoose = require('mongoose');
const {providerSchema} = require('../schemas/provider.schema');

//Create the provider model
const Provider = mongoose.model('Provider', providerSchema);

module.exports = { Provider }
