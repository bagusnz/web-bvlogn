const Video = require('../../model/Video');

exports.get = (req, res) => {
    Video.find((err, data) => {
        if(err){
            res.status(400).send();
        }
        res.send(data);
    })
};

exports.post = (req, res) => {
    let video = new Video(
        {
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
            image: req.body.image,
            published: req.body.published
        }
    );
    video.save((err) => {
        if (err){
            res.status(401).send();
        } else{
            res.status(201).send();
        }
    })
};

exports.update = (req, res) => {
    Video.findByIdAndUpdate(req.params.id, {text: req.body.text}, (err) => {
        if (err){
            res.status(401).send();
        } else {
            res.status(200).send();
        }
    })
};

exports.delete = (req, res) => {
    Video.findByIdAndDelete(req.params.id, (err) => {
        if (err){
            return next(err);
        } else {
            res.status(200).send();
        }
    });
};