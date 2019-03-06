/**
 * Model for videos.
 * NOT USED.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Attributes: title, description, link, image, published
 */
let Video = new Schema(
    {
        title: {type: String},
        description : {type: String},
        link: {type: String},
        image: {type: String},
        published: {type: Date}
    }
);

module.exports = mongoose.model('video', Video);