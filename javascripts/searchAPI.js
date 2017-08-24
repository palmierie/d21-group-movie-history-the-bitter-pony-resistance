"use strict";

// require("./searchAPI");
// require("./api-interaction");

var callAPI = require("./api-interaction");



console.log("something is working!");
let searchString = "lord%20of%20the";
console.log("searchString", searchString);
// let searchResults = callAPI.searchMoviesAPI(searchString);
// console.log("searchResults", searchResults);

// module.exports = callAPI;
console.log("callAPI", callAPI);

let movieArray = [];

callAPI.searchMoviesAPI(searchString)
.then((searchResults) => {
	console.log("searchResults", searchResults);
	console.log("searchResults.results", searchResults.results);



	$.each(searchResults.results, (key, value) => {
		let movieObject = {};
		movieObject.id = value.id;
		movieObject.title = value.original_title;
		movieObject.posterURL = "https://image.tmdb.org/t/p/w185" + value.poster_path;
		movieObject.overview = value.overview;
		movieObject.release_date = value.release_date;
		movieArray.push(movieObject);
	});


	// let castToGetId = movieArray[0].id;
	// console.log("castToGetId", castToGetId);

	// return castToGetId;

	// console.log(movieArray)

	return movieArray;

})
.then((movieArray) => {

var promises = [];
for (var i in movieArray) {
	promises.push(callAPI.getCastAPI(movieArray[i].id));
}

Promise.all(promises).then((castArray) => {


	console.log("castArray", castArray);

	for (var j in movieArray) {
		movieArray[j].cast = castArray[j].cast;
	}

	console.log("movieArray with added cast", movieArray);

	// for (var k in movieArray) {
	// 	let castNames = [];
	// 	let castToIterate = movieArray[k].cast;
	// 	$.each(castToIterate, (key, value) => {
	// 		castNames.push(value.name);
	// 	});
	// 	movieArray[k].castNames = castNames;
	// }

	// function compileCastNames ()

});

});