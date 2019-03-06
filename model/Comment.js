/**
 * Model for Comment to save people's comments.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Attributes: name, text, created
 */
let Comment = new Schema({
    name: {type:String, required: true},
    text: {type: String, required: true},
    created: {type: Date, required: true}
});

module.exports = mongoose.model('comment', Comment);