const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get comments
router.get('/', async (req, res) => {
    const comments = await loadCommentsCollection();
    res.send(await comments.find({}).toArray());
});

// Add comment
router.post('/', async (req, res) => {
    const comments = await loadCommentsCollection();
    await comments.insertOne({
        text: req.body.text,
        created: new Date()
    });
    res.status(201).send();
});

// Delete comment
router.delete('/:id', async (req, res) => {
    const comments = await loadCommentsCollection();
    await comments.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    });
    res.status(200).send();
});

async function loadCommentsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb://bn2803:bn2803@ds145194.mlab.com:45194/web-bvlogn', {
        useNewUrlParser: true
    });

    return client.db('web-bvlogn').collection('comments');
}

module.exports = router;