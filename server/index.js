const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middelware
app.use(bodyParser.json());
app.use(cors());

const comments = require("./routes/api/comments");

app.use('/api/comments', comments);

// Handle production
if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/public/'));

    // Handle Single Page Application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));