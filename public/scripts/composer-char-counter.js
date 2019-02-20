/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

    console.log('hellow')
 

    //const $tweetInput = $('#tweet-input');
    
    tweetLimit = 140;

    $("textarea").keypress(function() {
        const tweetLength = $("textarea").val().length;
        console.log("--", tweetLimit -tweetLength);
        console.log($("counter").text())
        console.log(this);
      });

})


//#tweet-input textarea
//https://stackoverflow.com/questions/11502563/id-tag-vs-id-findtag-which-is-preferable