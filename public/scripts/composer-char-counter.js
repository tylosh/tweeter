/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
    const tweetLimit = 140;

    $("textarea").keyup(function() {
        const tweetLength = $("textarea").val().length;
        const tweetLengthAvailable = tweetLimit - tweetLength;
        $("#tweetTextAvail").text(tweetLengthAvailable);
    
        //Change character counter to be red if negative
        if (tweetLengthAvailable < 0) {
           $("#tweetTextAvail").css("color", "red") /* = tweetLimit- tweetLength;*/ 
        } else {$("#tweetTextAvail").css("color", "black")}
      });
})
