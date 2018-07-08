$(document).ready(function(){

var quotes = [ {
          quote: " I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times, I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. ",
          author: "Michael Jordan"    
    }, 
                {
          quote: " I hated every minute of training, but I said, Don't quit. Suffer now and live the rest of your life as a champion. ",
          author: "Muhammad Ali"
    }, 
                {
          quote: " I'sm a mad dog whose only concern is winning. ",
          author:"Charles  Barkley "
    }, 
                {
          quote: "It kills me to lose. If I'm a troublemaker, and I don't think that my temper makes me one, then its because I cant stand losing. That's the way I am about winning, all I ever wanted to do was finish first.  ",
          author: "Jackie Robinson "    
    }, 
                {
          quote: "Nothing is black-and-white, except for winning and losing, and maybe that's why people gravitate to that so much.  ",
          author: "Steve Nash "
    }, 
                {
          quote: "Winning takes precedence over all. There's no gray area. No almosts.  ",
          author: "Kobe Bryant "
    }, 
                {
          quote: "Winning solves everything. ",
          author: "Tiger Woods "
    }
   ];



  $('#new-quote').click(function() {
    var quotesLength = quotes.length;
    var rand = Math.floor(Math.random() * quotesLength);
    $("#text").text(quotes[rand].quote);
    $("#author").text("- " + quotes[rand].author);
  });

  $('#tweet-quote').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + $('#text').text() + " " + $('#author').text());
  });

});
