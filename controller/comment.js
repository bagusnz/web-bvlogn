/**
 * Controller for accessing /comments page.
 */

const Comment = require('../model/Comment');
const Apikey = require('../model/Apikey');
const nodemailer = require('nodemailer');

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
    comment.save((err, data) => {
        if (err){
            res.status(401).send();
        } else{
            notifyAdmin(data);
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

/**
 * Other functions
 */

 /** Send email to BN */
notifyAdmin = (data) => {
    let transporter, mailOptions, key;

    Apikey.findOne({name:'google'}, (err, result) => {
        if (err){
            res.status(400).send();
        } else {
            key = result.key;
            transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'bagusnzz@gmail.com',
                    pass: key,
                }
            });
            mailOptions = {
                from: 'Web BVLOGN',
                to: 'bagusnzz@gmail.com',
                subject: 'New comment on web BVLOGN',
                text: 'Dear Bien,\n\n' + data.name + ' has commented on your website:\n\n"' + data.text + '"\n\nSincerely,\nAdmin'
            }
        
            transporter.sendMail(mailOptions, (err, info) => {
                if (err){
                    console.log('error occurs: ' + err);
                } else {
                    console.log('Email is sent! => ' + info.response);
                }
            });
        }
    });

}