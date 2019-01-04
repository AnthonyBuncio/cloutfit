const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShoeSchema = new Schema({
    display: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Shoe = mongoose.model('shoe', ShoeSchema)