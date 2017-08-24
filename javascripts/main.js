"use strict";



var callAPI = require("./api-interaction");




















































































// // Login Button Event Listener
// $("#loginBtn").click(function(){
//   console.log("clicked on Signin");
//   user.logInGoogle()
//   .then((result) => {
//     console.log("result from login", result.user.uid);
//     user.setUser(result.user.uid);
//     $("auth-btn").addClass("is-hidden");
//     $("#logout").removeClass("is-hidden");
//     loadSongsToDOM();
//   });
// });

// // Logout Button Event Listener
// $("#logoutBtn").click(function(){
//   console.log("logout clicked");
//   user.logOut();
//   loadSongsToDOM();

// });
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

// console.log("castToGetId", castToGetId);


// callAPI.getCastAPI(castToGetId).then((castResults) => {

// 	console.log("castResults", castResults);
// });


// });

	// console.log("movieArray", movieArray);

	// $.each(movieArray, (key, value) => {
	// 	let castToGetId = value.id;
	// 	callAPI.getCastAPI(castToGetId).then((theResult) => {
	// 	console.log("theResult", theResult);
	// 	value.cast = theResult.cast;
	// 	console.log("movieArray", movieArray);
	// 	});
	// });

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

	for (var k in movieArray) {
		let castNames = [];
		let castToIterate = movieArray[k].cast;
		$.each(castToIterate, (key, value) => {
			castNames.push(value.name);
		});
		movieArray[k].castNames = castNames;
	}

	function compileCastNames ()

});
// console.log("promises", promises);

	// .then(() => {
	// 	console.log("movieArray", movieArray);
	// });

	// let castToGetId = movieArray[0].id;
	// console.log("castToGetId", castToGetId);

	// callAPI.getCastApi(castToGetId);


// });
// .then((castResults) => {
// 	console.log("castResults:", castResults);
// });

// callAPI.getCastAPI("120")
// .then((castReturn) => {

// console.log("castReturn", castReturn);
	
});
// .then(() => {
// 	console.log("movieArray", movieArray);
// });



// function searchMoviesAPI(searchString) {
// 	return new Promise((resolve, reject) => {
// 		console.log("what is the URL?", `https://api.themoviedb.org/3/search/movie?api_key=4542105ab96b56ba20c973e344b4ac55&language=en-US&query=${searchString}&page=1&include_adult=false`);
// 		$.ajax({
// 			url: `https://api.themoviedb.org/3/search/movie?api_key=4542105ab96b56ba20c973e344b4ac55&language=en-US&query=${searchString}&page=1&include_adult=false`
// 		}).done((movieData) => {
// 			resolve(movieData);
// 		});
// 	});
// }
