const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Apikey = new Schema(
    {
        name: {type: String},
        key: {type:String}
    }
);

module.exports = mongoose.model('apikey', Apikey);