var keys = require('./keys.js');
var request = require('request');
var twitter = require("twitter");
var spotify = require('spotify');
var operator = process.argv[2];

switch (operator) {
    case 'twitter':
        console.log();
        break;

    case 'spotify':
        console.log();
        break;

    case 'omdb':

        var movieName = process.argv[3];

        var queryUrl = 'http://www.omdbapi.com/?t=' + movieName + '&y=&plot=short&r=json';

        console.log(queryUrl);

        request(queryUrl, function(error, response, body) {

            if (!error && response.statusCode == 200) {
            	console.log("Title: " + JSON.parse(body)["Title"])
                console.log("Release Year: " + JSON.parse(body)["Year"])
                console.log("Rating: " + JSON.parse(body)["imdbRating"])
                //country
                console.log("Language: " + JSON.parse(body)["Language"])
                console.log("Plot: " + JSON.parse(body)["Plot"])
                console.log("Starring: " + JSON.parse(body)["Actors"])
                //rotten tomatoes rating
                //rotten tomates url
            } else {
            	//http://www.omdbapi.com/?t=mr+nobody
            }
        });
        break;
}
