/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $('document').ready(function(e){
    
    //mentor said that given I was behind, ok to use this simpler method below vs. jQuery .add etc. 
    //this function extracts data from a tweet object, and applies into html container 
    const createTweetElement = function(tweetObj) {
        return (
            `<article class="all-tweetsArticle">
                <header>
                    <aside> <img src=${tweetObj.user.avatars.small} alt="avatar"> </aside>
                    <h2>${tweetObj.user.name}</h2>
                    <p> ${tweetObj.user.handle} </p>
                </header>
                <section>    
                    <p>${escape(tweetObj.content.text)}</p>
                </section>
                <footer>
                    <p>
                        Posted ${tweetObj.created_at}.
                    </p>
                    <aside>
                        <section class="icons-footer"> 
                            <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/flag.png" alt="flag" style="width:15px;height:15px;"> 
                            <img src="https://cdn3.iconfinder.com/data/icons/random-icon-set/512/retweet-512.png" alt="retweet" style="width:15px;height:15px;"> 
                            <img src= "https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png" alt="heart" style="width:15px;height:15px;">
                        </section>
                    </aside>
                </footer>
            </article>
            <div> 
                <p></p>  
            </div>`
        )       
    };

    function renderTweets(tweets) {
        // loops through tweets from data array, applies html staging, then appends to tweet-container
        for (let i = 0; i < tweets.length; i++) {
            var $tweet = createTweetElement(tweets[i]);
            $('#tweet-container').prepend($tweet);
        }
    }; 

    function renderLastTweet(newTweet) {
    //function to prepend just the last tweet, taking data from the posted tweet
        var $tweet = createTweetElement(newTweet)
        $('#tweet-container').prepend($tweet); 
    }; 
    
    function loadTweets () {
        //function to load tweets from server and append/render on tweet-container 
            $.get("/tweets", (tweets) => {
                let tweetArray = tweets;
                renderTweets(tweetArray);
            });
        };
        
    loadTweets();

    function escape(str) {
        //Preventing XSS with Escaping
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }


    /*-----------Routes/Buttons-------------*/

    $('.new-tweet').on('submit', (event) => {
        event.preventDefault();
    
        const data = $('#tweet-input').serialize();
        const sliceData = data.slice(5);
                
        $.post('/tweets', data, function(data){
            renderLastTweet(data);
        });
        $('#tweet-input').val('');
        $("#tweetTextAvail").text(140);
        $('#tweetButton').prop('disabled', true);
    });

    //Code to hide the compose button on load, and fade in/out when the button is clicked.
    $('.new-tweet').hide();
    
    var buttonValue = 1;
    
    $('.btn').on('click', (event) => {
        event.preventDefault();
        
        //on load, compose is not visible, on click value is set to 0 and show, next button click will fade out and then repeat
        if (buttonValue === 0) {
            $('.new-tweet').fadeOut();
        buttonValue = 1;
        } else {
            $('.new-tweet').fadeIn();
            $('#tweet-input').focus().select();
            buttonValue = 0;  
        }
    });

});

