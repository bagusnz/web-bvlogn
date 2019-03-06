const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const control_apikey = require("./routes/api/apikey");
const control_comment = require("./routes/api/comment");
const control_video = require('./routes/api/video');
const root = require('./routes/root');
const videos = require('./routes/video');
const comments = require('./routes/comment');

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

let dev_db_url = 'mongodb://bn2803:bn2803@ds145194.mlab.com:45194/web-bvlogn';
const mongodb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongodb, {useNewUrlParser: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: ')); 

app.use('/', root);
app.use('/videos', videos);
app.use('/comments', comments);
app.use('/api/apikeys', control_apikey);
app.use('/api/comments', control_comment);
app.use('/api/videos', control_video);

// Handle production
if(process.env.NODE_ENV === 'production') {
    // Static folder
    app.use(express.static(__dirname + '/view/'));

    // Handle Single Page Application
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/view/index.html'));
}

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));