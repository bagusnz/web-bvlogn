const Comment = require('../model/Comment');

exports.get = (req, res) => {
    res.render('comment.ejs', {
        navbar_comments: 1,
    });
};