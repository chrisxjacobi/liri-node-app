var keys = require('./keys.js');
var request = require('request');
var twitter = require("twitter");
var spotify = require('spotify');
var defaultSong = 'The Sign';
var operator = process.argv[2];
var fs = require('fs');


switch (operator) {
    case 'my-tweets':
        var client = new Twitter({
            consumer_key: keys.twitterKeys.consumer_key,
            consumer_secret: keys.twitterKeys.consumer_secret,
            access_token_key: keys.twitterKeys.access_token_key,
            access_token_secret: keys.twitterKeys.access_token_secret
        });

        break;

    case 'spotify-this-song':
        spotify.search({ type: 'track', query: defaultSong }, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            /* else {
            	console.log("Artist: " + data.artist)
            	console.log("Song: " + data.track)
            	console.log("Link: " + )
            	console.log("Album: " + )
            }
            */
        });
        break;

    case 'movie-this':

        var movieName = process.argv[3];
        var defaultMovie = 'Mr. Nobody';
        var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&tomatoes=true&r=json';

        request(queryUrl, function(error, response, body) {

            if (!error && response.statusCode == 200) {
                console.log("Title: " + JSON.parse(body)["Title"])
                console.log("Release Year: " + JSON.parse(body)["Year"])
                console.log("Rating: " + JSON.parse(body)["imdbRating"])
                console.log("Country: " + JSON.parse(body)["Country"])
                console.log("Language: " + JSON.parse(body)["Language"])
                console.log("Plot: " + JSON.parse(body)["Plot"])
                console.log("Starring: " + JSON.parse(body)["Actors"])
                console.log("Rotten Tomatoes rating: " + JSON.parse(body)["tomatoRating"])
                console.log("Rotten Tomatoes info: " + JSON.parse(body)["tomatoURL"])
            }
            if (movieName === undefined) {
                movieName = defaultMovie;
            }

        });
        break;

    case 'do-what-it-says':

        fs.readFile("./random.txt", "utf8", function(error, data) {
            console.log(data);

            var dataArr = data.split(',');

            console.log(dataArr);
        })

}
