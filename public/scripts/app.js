/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


 $('document').ready(function(e){
    const tweetData = {
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
      }
      

function createTweetElement(tweetObj) {
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
    
      var $tweet = createTweetElement(tweetData);
      
      // Test / driver code (temporary)
      console.log($tweet); // to see what it looks like
      $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
 })
// Test / driver code (temporary). Eventually will get this from the server.
