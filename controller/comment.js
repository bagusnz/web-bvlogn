const Comment = require('../model/Comment');

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

exports.update = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, {text: req.body.text}, (err) => {
        if (err){
            res.status(401).send();
        } else {
            res.redirect('/comments');
        }
    });
};

exports.delete = (req, res) => {
    Comment.findByIdAndDelete(req.params.id, (err) => {
        if (err){
            res.status(401).send();
        } else {
            res.redirect('/comments');
        }
    });
};