const request = require('request');
const Apikey = require('../model/Apikey');

exports.get = (req, res) => {
    Apikey.findOne({name:'youtube'}, (err, result) => {
        let apikey = result.key;
        let url = `https://www.googleapis.com/youtube/v3/search?channelId=UCetmfmsUQ8FFHZh2fB80_hw&part=snippet,id&order=viewCount&type=video&maxResults=50&key=${apikey}`;
        request(url, (err, response, body) => {
            //Getting JSON data from youtube API
            let data, videos;

            data = JSON.parse(body).items;
            videos = new Array();

            data.forEach(element => {
                element.snippet.videoId = element.id.videoId;
                videos.push(element.snippet);
            });

            res.render('video.ejs', {
                videos: videos,
                navbar_videos: true,
            });
        });
    });
};