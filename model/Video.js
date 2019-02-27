const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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