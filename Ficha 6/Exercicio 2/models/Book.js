var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var BookSchema = new Schema({
    _id: String,
    title: String,
    name: String,
    email: String,
    book: String,
    description: String,
    readed: String,
    imagePath: String,
    updated_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('Book', BookSchema);