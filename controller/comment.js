/**
 * Controller for accessing /comments page.
 */

const Comment = require('../model/Comment');

/** Handling GET request */
exports.get = (req, res) => {
    Comment.find((err, data) => {
        if(err){
            res.status(400).send();
        } else {
            res.render('comment.ejs', {
                comments: data,
                navbar_comments: 1,
            });
        }
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
            res.status(401).send();
        } else{
            res.redirect('/comments');
        }
    });
};

/** Handling PUT request, not yet implemented */
exports.update = (req, res) => {
    res.redirect('/comments');
};

/** Handling DELETE request, not yet implemented */
exports.delete = (req, res) => {
    res.redirect('/comments');
};