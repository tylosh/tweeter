/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

    console.log('hellow')
 

    //const $tweetInput = $('#tweet-input');
    
    const tweetLimit = 140;

    $("textarea").keyup(function() {
        const tweetLength = $("textarea").val().length;
        const tweetLengthAvailable = tweetLimit - tweetLength;
        console.log("--", tweetLengthAvailable);
        console.log($("#tweetTextAvail").text(tweetLengthAvailable))
        console.log(this);
        
        $("#tweetTextAvail").css("color", "red") /* = tweetLimit- tweetLength;*/
      });

})


//#tweet-input textarea
//https://stackoverflow.com/questions/11502563/id-tag-vs-id-findtag-which-is-preferable


//keypress doesn't recognize delete key (so won't update count)