/**
 * Controller for managing API key through API
 */

const Apikey = require('../../model/Apikey');

/** Handling GET request */
exports.get = (req, res) => {
    Apikey.find((err, data) => {
        if(err){
            res.status(400).send();
        }
        res.status(200).send();
    });
};

/** Handling POST request */
exports.post = (req, res) => {
    let apikey = new Apikey(
        {
            name: req.body.name,
            key: req.body.key
        }
    );
    apikey.save((err) => {
        if (err){
            res.status(400).send();
        } else{
            res.status(201).send();
        }
    });
};

/** Handling PUT request */
exports.update = (req, res) => {
    Apikey.findByIdAndUpdate(req.params.id, {text: req.body.text}, (err) => {
        if (err){
            res.status(400).send();
        } else {
            res.status(200).send();
        }
    });
};

/** Handling DELETE request */
exports.delete = (req, res) => {
    Apikey.findByIdAndDelete(req.params.id, (err) => {
        if (err){
            return next(err);
        } else {
            res.status(200).send();
        }
    });
};