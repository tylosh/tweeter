/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $('document').ready(function(e){
    
    const data = [
        {
          "user": {
            "name": "Newton",
            "avatars": {
              "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
              "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
              "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
            },
            "handle": "@SirIsaac"
          },
          "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
          },
          "created_at": 1461116232227
        },
        {
          "user": {
            "name": "Descartes",
            "avatars": {
              "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
              "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
              "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
            },
            "handle": "@rd" },
          "content": {
            "text": "Je pense , donc je suis"
          },
          "created_at": 1461113959088
        },
        {
          "user": {
            "name": "Johann von Goethe",
            "avatars": {
              "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
              "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
              "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
            },
            "handle": "@johann49"
          },
          "content": {
            "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
          },
          "created_at": 1461113796368
        }
      ];
    
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
                <p>${tweetObj.content.text}</p>
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
        for (let i = 0; i < data.length; i++) {
            var $tweet = createTweetElement(data[i]);
            $('#tweet-container').append($tweet);
        }
    } 
    renderTweets(data);
})
// Test / driver code (temporary). Eventually will get this from the server.

