/**
 * Entry point for the application.
 */

 /** Requiring packages. */
const   express     = require('express'),
        bodyParser  = require('body-parser'),
        cors        = require('cors'),
        mongoose    = require('mongoose'),
        path        = require('path');
const app = express();

/** Requiring routes. */
const   control_apikey  = require("./routes/api/apikey"),
        control_comment = require("./routes/api/comment"),
        control_video   = require('./routes/api/video'),
        root            = require('./routes/root'),
        videos          = require('./routes/video'),
        comments        = require('./routes/comment');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

/** Set MongoDB connection */
let dev_db_url = 'mongodb://bn2803:bn2803@ds145194.mlab.com:45194/web-bvlogn';
const mongodb = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongodb, {useNewUrlParser: true, useFindAndModify: false});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: ')); 

/** Router middleware */
app.use('/', root);
app.use('/videos', videos);
app.use('/comments', comments);
app.use('/api/apikeys', control_apikey);
app.use('/api/comments', control_comment);
app.use('/api/videos', control_video);

/** Set port */
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));