"use strict";

/***** Event Listeners *****/

    /***NavBar***/

        //Find movies enter button function id=""

        //Find movies click button id="findMovie"

        //Find my movies click button id="searchMyMovies"

        //Login button click id="loginBtn"

        //Logout button click id="logoutBtn"

    /******/

    /***Watched/Unwatched***/

        //Click Funtion for Watched button

        //Click Function for Unwatched button

    /******/

    /***Card Funtionality***/

        //Add to watch list 
        //If logged in push to database/else login alert

        //Delete Card id="cardDltBtn"

        //Rate Watched Movie

    /******/










// Login Button Event Listener
$("#loginBtn").click(function(){
  console.log("clicked on Signin");
  user.logInGoogle()
  .then((result) => {
    console.log("result from login", result.user.uid);
    user.setUser(result.user.uid);
    $("auth-btn").addClass("is-hidden");
    $("#logout").removeClass("is-hidden");
    loadSongsToDOM();
  });
});

// Logout Button Event Listener
$("#logoutBtn").click(function(){
  console.log("logout clicked");
  user.logOut();
  loadSongsToDOM();

});


