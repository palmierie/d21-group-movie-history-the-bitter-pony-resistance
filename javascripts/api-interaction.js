"use strict";
// This module has no knowledge of the DOM, or where the data goes after it is fetched from Firebase.
// It is only concerned with getting and setting data in the db

// let $ = require('jquery'),

function searchMoviesAPI(searchString) {
	return new Promise((resolve, reject) => {
		console.log("what is the URL?", `${firebase.getFBsettings().databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`);
		$.ajax({
			url: `${firebase.getFBsettings().databaseURL}/songs.json?orderBy="uid"&equalTo="${user}"`
		}).done((songData) => {
			resolve(songData);
		});
	});
}



module.exports = {
 
};
