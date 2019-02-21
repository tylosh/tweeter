/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $('document').ready(function(e){
    
    function loadTweets () {
    //function to load tweets from server and append/render on tweet-container 
        $.get("/tweets", (tweets) => {
            let tweetArray = tweets;
            renderTweets(tweetArray);
        });
    }loadTweets()


    //mentor said that given I was behind, ok to use this simpler method below vs. jQuery .add etc. 
    //this function extracts data from a tweet object, and applies into html container 
    createTweetElement = function(tweetObj) {
        return `<article class="all-tweetsA">
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
                    Posted 10 days ago.
                </p>
            <article class="icons-footer"> 
                <img src="http://iconshow.me/media/images/ui/ios7-icons/png/512/flag.png" alt="flag" style="width:15px;height:15px;"> 
                <img src="https://cdn3.iconfinder.com/data/icons/random-icon-set/512/retweet-512.png" alt="retweet" style="width:15px;height:15px;"> 
                <img src= "https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d-heart-icon-by-vexels.png" alt="heart" style="width:15px;height:15px;">
            </article>
            </footer>`       
    };
    
    function renderTweets(tweets) {
        // loops through tweets from data array, applies html staging, then appends to tweet-container
        for (let i = 0; i < tweets.length; i++) {
            var $tweet = createTweetElement(tweets[i]);
            $('#tweet-container').prepend($tweet);
        }
    } 
    
    $('.new-tweet').on('submit', (event) => {
        event.preventDefault();
    
        const data = $('#tweet-input').serialize();
        const sliceData = data.slice(5);
        
        if (sliceData === null || sliceData === "") {
            alert("Tweet is empty")
        } else if (sliceData.length > 140) {
            alert("Tweet is too long")
        } else {
            $.post('/tweets', data)
            loadTweets()
        }

    });


    function escape(str) {
        //Preventing XSS with Escaping
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      }

})