/**
 * Model for APIKEY to save the youtube apikey.
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Attributes: name, key
 */
let Apikey = new Schema(
    {
        name: {type: String},
        key: {type:String}
    }
);

module.exports = mongoose.model('apikey', Apikey);