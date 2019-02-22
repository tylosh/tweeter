/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
    const tweetLimit = 140;

    //Following Twitter logic, Tweet button will be disabled if tweet box is null or >140 characters
    //https://blog.revillweb.com/jquery-disable-button-disabling-and-enabling-buttons-with-jquery-5e3ffe669ece
    //set tweet button to disabled on load (no text)
    $('#tweetButton').prop('disabled', true); 

    //hide tweet too long message
    $('#tweetLong').hide();

    $("textarea").keyup(function() {
        const tweetLength = $("textarea").val().length;
        const tweetLengthAvailable = tweetLimit - tweetLength;
        $("#tweetTextAvail").text(tweetLengthAvailable);
    
        //Change character counter to be red if negative, disable tweet button if no text, or >140 characters
        if (tweetLengthAvailable < 0) {
            $("#tweetTextAvail").css("color", "red") /* = tweetLimit- tweetLength;*/
            $('#tweetButton').prop('disabled', true);
            $('#tweetLong').show();
            $('#tweetEmpty').hide() 
        } else if (tweetLengthAvailable === 140) {
            $('#tweetButton').prop('disabled', true);
            $('#tweetLong').hide();
            $('#tweetEmpty').show(); 
        } else {
            $("#tweetTextAvail").css("color", "black")
            $('#tweetButton').prop('disabled', false); 
            $('#tweetLong').hide();
            $('#tweetEmpty').hide() 
        }
    });
})
