const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Comment = new Schema({
    name: {type:String, required: true},
    text: {type: String, required: true},
    created: {type: Date, required: true}
});

module.exports = mongoose.model('comment', Comment);