var audience = ["Carlos. A", "Jobeth", "Carlos.B", "Brigette",
                        "Angie", "Martin", "AJ", "Max","Trevor",
                        "Victor", "Andrew", "Jonathan", "Timmy",
                        "Noah", "Marcos", "Joseph"]

function selectPlayer () {
    var getAudience = Math.floor(Math.random()*16)
    alert("It's your turn " + audience[getAudience])
  }

//to hide the options a,b,c,d
$('.darkHorse').hide(0)
$('.style').hide(0)
$('.hello').hide(0)
$('.imNotTheOnlyOne').hide(0)
$('.theOne').hide(0)
$('.iWantItThatWay').hide(0)
$('.quitPlayingGamesWithMyHeart').hide(0)
$('.getDown').hide(0)
$('.getLow').hide(0)
$('.sorry').hide(0)
$('.hotlineBling').hide(0)
$('.takeCare').hide(0)
$('.fiveHours').hide(0)
$('.calling').hide(0)
$('.cityOfDreams').hide(0)
$('.heroes').hide(0)
$('.caDreaming').hide(0)
$('.caCalling').hide(0)
$('.caLoving').hide(0)
$('.caLove').hide(0)
$('.illStandByYou').hide(0)
$('.pleaseDontGo').hide(0)
$('.neverGonna').hide(0)
$('.iWillAlways').hide(0)
$('.boyfriend').hide(0)
$('.loveYourself').hide(0)
$('.oneTime').hide(0)
$('.oneLess').hide(0)
$('.smellsLike').hide(0)
$('.stairway').hide(0)
$('.backInBlack').hide(0)
$('.enter').hide(0)
$('.oneLove').hide(0)
$('.mean').hide(0)
$('.rude').hide(0)
$('.alright').hide(0)
$('.shake').hide(0)
$('.partyRock').hide(0)
$('.partyHard').hide(0)
$('.shuffling').hide(0)
$('.audioStyle').hide(0)
$('.audioQuitPlaying').hide(0)
$('.audioHotlineBling').hide(0)
$('.audioFiveHours').hide(0)
$('.audioCaLove').hide(0)
$('.audioNeverGonna').hide(0)
$('.audioLoveYourself').hide(0)
$('.audioSmellsLike').hide(0)
$('.audioRude').hide(0)
$('.audioPartyRock').hide(0)


$('.divRight').hide(0)
$('.divWrong').hide(0)


function hide() {
    $('.darkHorse').hide(0)
    $('.style').hide(0)
    $('.hello').hide(0)
    $('.imNotTheOnlyOne').hide(0)
    $('.theOne').hide(0)
    $('.iWantItThatWay').hide(0)
    $('.quitPlayingGamesWithMyHeart').hide(0)
    $('.getDown').hide(0)
    $('.getLow').hide(0)
    $('.sorry').hide(0)
    $('.hotlineBling').hide(0)
    $('.takeCare').hide(0)
    $('.fiveHours').hide(0)
    $('.calling').hide(0)
    $('.cityOfDreams').hide(0)
    $('.heroes').hide(0)
    $('.caDreaming').hide(0)
    $('.caCalling').hide(0)
    $('.caLoving').hide(0)
    $('.caLove').hide(0)
    $('.illStandByYou').hide(0)
    $('.pleaseDontGo').hide(0)
    $('.neverGonna').hide(0)
    $('.iWillAlways').hide(0)
    $('.boyfriend').hide(0)
    $('.loveYourself').hide(0)
    $('.oneTime').hide(0)
    $('.oneLess').hide(0)
    $('.smellsLike').hide(0)
    $('.stairway').hide(0)
    $('.backInBlack').hide(0)
    $('.enter').hide(0)
    $('.oneLove').hide(0)
    $('.mean').hide(0)
    $('.rude').hide(0)
    $('.alright').hide(0)
    $('.shake').hide(0)
    $('.partyRock').hide(0)
    $('.partyHard').hide(0)
    $('.shuffling').hide(0)
    $('.audioQuitPlaying').hide(0)
    $('.audioHotlineBling').hide(0)
    $('.audioFiveHours').hide(0)
    $('.audioCaLove').hide(0)
    $('.audioNeverGonna').hide(0)
    $('.audioLoveYourself').hide(0)
    $('.audioSmellsLike').hide(0)
    $('.audioRude').hide(0)
    $('.audioPartyRock').hide(0)
    $('.audioStyle').hide(0)

    $('.divRight').hide(0)
    $('.divWrong').hide(0)
    document.getElementById("startButton").disabled = false;
}

//declare a random song
var randomSong;

//get a random song
function randomStartBtn () {
        random = Math.random();
        if (random  <= 0.10) {
        $('.theOne').fadeIn(7000)
        $('.iWantItThatWay').fadeIn(7000)
        $('.quitPlayingGamesWithMyHeart').fadeIn(7000)
        $('.getDown').fadeIn(7000)
        $('.audioQuitPlaying').fadeIn(0)
        var song1 = document.getElementById("songQuitPlaying");
        currentSong = song1;
        // randomSong = $(this).attr('class')
        //var for button the user clicks on
        //compare what user clicks on & the currentSong
        song1.autoplay = true;
        song1.load();
       // rightOrWrong()


        }else if (random <= 0.20) {
        $('.darkHorse').fadeIn(7000)
        $('.style').fadeIn(7000)
        $('.hello').fadeIn(7000)
        $('.imNotTheOnlyOne').fadeIn(7000)
        $('.audioStyle').fadeIn(0)
        var song2 = document.getElementById("songStyle");
        currentSong = song2;
        song2.autoplay = true;
        song2.load();
        //rightOrWrong()

        }else if (random <= 0.30) {
        $('.getLow').fadeIn(7000)
        $('.sorry').fadeIn(7000)
        $('.hotlineBling').fadeIn(7000)
        $('.takeCare').fadeIn(7000)
        $('.audioHotlineBling').fadeIn(0)
        var song3 = document.getElementById("songHotlineBling");
        currentSong = song3;
        song3.autoplay = true;
        song3.load();

        }else if (random <= 0.40) {
        $('.caDreaming').fadeIn(7000)
        $('.caCalling').fadeIn(7000)
        $('.caLoving').fadeIn(7000)
        $('.caLove').fadeIn(7000)
        $('.audioCaLove').fadeIn(0)
        var song5 = document.getElementById("songCaLove");
        currentSong = song5;
        song5.autoplay = true;
        song5.load();

        }else if (random <= 0.50) {
        $('.illStandByYou').fadeIn(7000)
        $('.pleaseDontGo').fadeIn(7000)
        $('.neverGonna').fadeIn(7000)
        $('.iWillAlways').fadeIn(7000)
        $('.audioNeverGonna').fadeIn(0)
        var song6 = document.getElementById("songNeverGonna");
        currentSong = song6;
        song6.autoplay = true;
        song6.load();

        }else if (random <= 0.60) {
        $('.boyfriend').fadeIn(7000)
        $('.loveYourself').fadeIn(7000)
        $('.oneTime').fadeIn(7000)
        $('.oneLess').fadeIn(7000)
        $('.audioLoveYourself').fadeIn(0)
        var song7 = document.getElementById("songLoveYourself");
        currentSong = song7;
        song7.autoplay = true;
        song7.load();

        }else if (random <= 0.70) {
        $('.smellsLike').fadeIn(7000)
        $('.stairway').fadeIn(7000)
        $('.backInBlack').fadeIn(7000)
        $('.enter').fadeIn(7000)
        $('.audioSmellsLike').fadeIn(0)
        var song8 = document.getElementById("songSmellsLike");
        currentSong = song8;
        song8.autoplay = true;
        song8.load();

        }else if (random <= 0.80) {
        $('.oneLove').fadeIn(7000)
        $('.mean').fadeIn(7000)
        $('.rude').fadeIn(7000)
        $('.alright').fadeIn(7000)
        $('.audioRude').fadeIn(0)
        var song9 = document.getElementById("songRude");
        currentSong = song9;
        song9.autoplay = true;
        song9.load();

        }else if (random <= 0.90) {
        $('.shake').fadeIn(7000)
        $('.partyRock').fadeIn(7000)
        $('.partyHard').fadeIn(7000)
        $('.shuffling').fadeIn(7000)
        $('.audioPartyRock').fadeIn(0)
        var song10 = document.getElementById("songPartyRock");
        currentSong = song10;
        song10.autoplay = true;
        song10.load();

      }else {
        $('.fiveHours').fadeIn(7000)
        $('.calling').fadeIn(7000)
        $('.cityOfDreams').fadeIn(7000)
        $('.heroes').fadeIn(7000)
        $('.audioFiveHours').fadeIn(0)
        var song4 = document.getElementById("songFiveHours");
        currentSong = song4;
        song4.autoplay = true;
        song4.load();
      }
      document.getElementById("startButton").disabled = true;
      $('button').on('click', function() {
        //store the class of button you click on as a variable
        randomSong = $(this).attr('class');
        console.log("Random song: " + randomSong);

      });
      $('button').on('click', function() {
      currentSong = $(this).attr('class')
      console.log("Current song: " + currentSong);
      })

      //set countdown timer in the start button function
      var seconds = 22;
      function secondPassed() {
          var minutes = Math.round((seconds - 30)/60);
          var remainingSeconds = seconds % 60;
          if (remainingSeconds < 10) {
              remainingSeconds = "0" + remainingSeconds;
          }
          document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
          if (seconds == 0) {
              clearInterval(countdownTimer);
              alert("Time's Up!");
          } else {
              seconds--;
          }
      }
      var countdownTimer = setInterval(secondPassed, 1000);

}

$('.startBtn').click(randomStartBtn);

//function rightOrWrong () {


//first set of the songs
$('.theOne').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.iWantItThatWay').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.quitPlayingGamesWithMyHeart').click(function() {
pauseSong(randomSong, currentSong);
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.getDown').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//second set of the songs
$('.darkHorse').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.style').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.hello').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.imNotTheOnlyOne').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//third set of the songs
$('.getLow').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.sorry').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.hotlineBling').click(function() {
pauseSong(randomSong, currentSong);
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.takeCare').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//fourth set of the songs
$('.fiveHours').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.calling').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.cityOfDreams').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.heroes').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//fifth set of the songs
$('.caDreaming').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.caCalling').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.caLoving').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.caLove').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

//sixth set of the songs
$('.illStandByYou').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.pleaseDontGo').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.neverGonna').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.iWillAlways').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//seventh set of the songs
$('.boyfriend').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.loveYourself').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.oneTime').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.oneLess').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//eight set of the songs
$('.smellsLike').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.stairway').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.backInBlack').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.enter').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//ninth set of the songs
$('.oneLove').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.mean').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.rude').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.alright').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

//tenth set of the songs
$('.shake').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.partyRock').click(function() {
pauseSong(randomSong, currentSong)
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 4000);
});

$('.partyHard').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.shuffling').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

function pauseSong(currentSong, randomSong) {
  console.log("in the pause song fn");
  if (currentSong == randomSong){
    var a = document.getElementsByTagName('audio');
    for (var i = 0; i < a.length; i++){
      a[i].pause();
    }
    console.log("haha")
  }

}


//}


