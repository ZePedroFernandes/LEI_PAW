const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: { type: String },
    description: { type: String },
    quantity: { type: Number }
});

module.exports = mongoose.model('Product', ProductSchema);