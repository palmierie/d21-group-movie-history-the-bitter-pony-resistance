"use strict";

let callAPI = require("./api-interaction");

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
let searchResults = callAPI.searchMoviesAPI(searchString);
console.log("searchResults", searchResults);

module.exports = callAPI;


