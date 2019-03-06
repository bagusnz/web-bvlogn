/**
 * Controller for managing comment through API.
 */

const Comment = require('../../model/Comment');

/** Handling GET request */
exports.get = (req, res) => {
    Comment.find((err, data) => {
        if(err){
            res.status(400).send();
        }
        res.send(data);
    });
};

/** Handling POST request */
exports.post = (req, res) => {
    let comment = new Comment(
        {
            name: req.body.name,
            text: req.body.text,
            created: new Date()
        }
    );
    comment.save((err) => {
        if (err){
            res.status(400).send();
        } else{
            res.status(201).send();
        }
    });
};

/** Handling PUT request */
exports.update = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, {text: req.body.text}, (err) => {
        if (err){
            res.status(400).send();
        } else {
            res.status(200).send();
        }
    });
};

/** Handling DELETE request */
exports.delete = (req, res) => {
    Comment.findByIdAndDelete(req.params.id, (err) => {
        if (err){
            res.status(400).send();
        } else {
            res.status(200).send();
        }
    });
};