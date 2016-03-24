var audience = ["Carlos. A", "Jobeth", "Carlos.B", "Brigette",
                        "Angie", "Martin", "AJ", "Max","Trevor",
                        "Victor", "Andrew", "Jonathan", "Timmy",
                        "Noah", "Marcos", "Joseph"]

//randomly select a player
function selectPlayer () {
    var getAudience = Math.floor(Math.random()*16)
    alert("It's your turn " + audience[getAudience])
  }

function secondPassed(){
}

var countdownTimer;

function myStopFunction() {
  clearTimeout(countdownTimer)
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
$('.audioCallMe').hide(0)
$('.audioRedLights').hide(0)
$('.audioPhotograph').hide(0)
$('.audioWeAre').hide(0)
$('.audioHotelCa').hide(0)
$('.callMe').hide(0)
$('.lights').hide(0)
$('.photograph').hide(0)
$('.fun').hide(0)
$('.hotel').hide(0)
$('.she').hide(0)
$('.irre').hide(0)
$('.paradise').hide(0)
$('.daft').hide(0)
$('.what').hide(0)
$('.audioSheWill').hide(0)
$('.audioIrre').hide(0)
$('.audioPara').hide(0)
$('.audioGet').hide(0)
$('.audioWhat').hide(0)

$('.divRight').hide(0)
$('.divWrong').hide(0)
$('#applause').hide(0)
$('#boo').hide(0)

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
    $('.audioCallMe').hide(0)
    $('.audioRedLights').hide(0)
    $('.audioPhotograph').hide(0)
    $('.audioWeAre').hide(0)
    $('.audioHotelCa').hide(0)
    $('.callMe').hide(0)
    $('.lights').hide(0)
    $('.photograph').hide(0)
    $('.fun').hide(0)
    $('.hotel').hide(0)
    $('.she').hide(0)
    $('.irre').hide(0)
    $('.paradise').hide(0)
    $('.daft').hide(0)
    $('.what').hide(0)
    $('.audioSheWill').hide(0)
    $('.audioIrre').hide(0)
    $('.audioPara').hide(0)
    $('.audioGet').hide(0)
    $('.audioWhat').hide(0)


    $('.divRight').hide(0)
    $('.divWrong').hide(0)

    document.getElementById("startButton").disabled = false;
}

//declare a random song
var randomSong;

//get a random song
function randomStartBtn () {
        random = Math.random();
        if (random  <= 0.05) {
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


        }else if (random <= 0.10) {
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

        }else if (random <= 0.15) {
        $('.getLow').fadeIn(7000)
        $('.sorry').fadeIn(7000)
        $('.hotlineBling').fadeIn(7000)
        $('.takeCare').fadeIn(7000)
        $('.audioHotlineBling').fadeIn(0)
        var song3 = document.getElementById("songHotlineBling");
        currentSong = song3;
        song3.autoplay = true;
        song3.load();

        }else if (random <= 0.20) {
        $('.callMe').fadeIn(7000)
        $('.audioCallMe').fadeIn(0)
        var song11 = document.getElementById("songCallMe");
        currentSong = song11;
        song11.autoplay = true;
        song11.load();

        }else if (random <= 0.25) {
        $('.lights').fadeIn(7000)
        $('.audioRedLights').fadeIn(0)
        var song12 = document.getElementById("songRedLights");
        currentSong = song12;
        song12.autoplay = true;
        song12.load();

        }else if (random <= 0.30) {
        $('.fun').fadeIn(7000)
        $('.audioWeAre').fadeIn(0)
        var song13 = document.getElementById("songWeAre");
        currentSong = song13;
        song13.autoplay = true;
        song13.load();

        }else if (random <= 0.35) {
        $('.photograph').fadeIn(7000)
        $('.audioPhotograph').fadeIn(0)
        var song14 = document.getElementById("songPhotograph");
        currentSong = song14;
        song14.autoplay = true;
        song14.load();

        }else if (random <= 0.40) {
        $('.hotel').fadeIn(7000)
        $('.audioHotelCa').fadeIn(0)
        var song15 = document.getElementById("songHotelCa");
        currentSong = song15;
        song15.autoplay = true;
        song15.load();

        }else if (random <= 0.45) {
        $('.she').fadeIn(7000)
        $('.audioSheWill').fadeIn(0)
        var song16 = document.getElementById("songSheWill");
        currentSong = song16;
        song16.autoplay = true;
        song16.load();

        }else if (random <= 0.50) {
        $('.irre').fadeIn(7000)
        $('.audioIrre').fadeIn(0)
        var song17 = document.getElementById("songIrre");
        currentSong = song17;
        song17.autoplay = true;
        song17.load();

        }else if (random <= 0.55) {
        $('.paradise').fadeIn(7000)
        $('.audioPara').fadeIn(0)
        var song18 = document.getElementById("songPara");
        currentSong = song18;
        song18.autoplay = true;
        song18.load();

        }else if (random <= 0.60) {
        $('.daft').fadeIn(7000)
        $('.audioGet').fadeIn(0)
        var song19 = document.getElementById("songGet");
        currentSong = song19;
        song19.autoplay = true;
        song19.load();

        }else if (random <= 0.65) {
        $('.what').fadeIn(7000)
        $('.audioWhat').fadeIn(0)
        var song20 = document.getElementById("songWhat");
        currentSong = song20;
        song20.autoplay = true;
        song20.load();

        }else if (random <= 0.70) {
        $('.caDreaming').fadeIn(7000)
        $('.caCalling').fadeIn(7000)
        $('.caLoving').fadeIn(7000)
        $('.caLove').fadeIn(7000)
        $('.audioCaLove').fadeIn(0)
        var song5 = document.getElementById("songCaLove");
        currentSong = song5;
        song5.autoplay = true;
        song5.load();

        }else if (random <= 0.75) {
        $('.illStandByYou').fadeIn(7000)
        $('.pleaseDontGo').fadeIn(7000)
        $('.neverGonna').fadeIn(7000)
        $('.iWillAlways').fadeIn(7000)
        $('.audioNeverGonna').fadeIn(0)
        var song6 = document.getElementById("songNeverGonna");
        currentSong = song6;
        song6.autoplay = true;
        song6.load();

        }else if (random <= 0.80) {
        $('.boyfriend').fadeIn(7000)
        $('.loveYourself').fadeIn(7000)
        $('.oneTime').fadeIn(7000)
        $('.oneLess').fadeIn(7000)
        $('.audioLoveYourself').fadeIn(0)
        var song7 = document.getElementById("songLoveYourself");
        currentSong = song7;
        song7.autoplay = true;
        song7.load();

        }else if (random <= 0.85) {
        $('.smellsLike').fadeIn(7000)
        $('.stairway').fadeIn(7000)
        $('.backInBlack').fadeIn(7000)
        $('.enter').fadeIn(7000)
        $('.audioSmellsLike').fadeIn(0)
        var song8 = document.getElementById("songSmellsLike");
        currentSong = song8;
        song8.autoplay = true;
        song8.load();

        }else if (random <= 0.90) {
        $('.oneLove').fadeIn(7000)
        $('.mean').fadeIn(7000)
        $('.rude').fadeIn(7000)
        $('.alright').fadeIn(7000)
        $('.audioRude').fadeIn(0)
        var song9 = document.getElementById("songRude");
        currentSong = song9;
        song9.autoplay = true;
        song9.load();

        }else if (random <= 0.95) {
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

      //set countdown timer function
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
      countdownTimer = setInterval(secondPassed, 1000);
}


$('.startBtn').click(randomStartBtn);


// function to pause the song
function pauseSong(currentSong, randomSong) {
  console.log("in the pause song fn");
  if (currentSong == randomSong){
    var toPauseSong = document.getElementsByTagName('audio');
    for (var i = 0; i < toPauseSong.length; i++){
      toPauseSong[i].pause();
    }
  }

}



//function rightOrWrong () {


//first set of the songs
$('.theOne').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.iWantItThatWay').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.quitPlayingGamesWithMyHeart').click(function() {
pauseSong(randomSong, currentSong);
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.getDown').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//second set of the songs
$('.darkHorse').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.style').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)
setTimeout(function(){  hide() }, 5000);
});

$('.hello').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.imNotTheOnlyOne').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//third set of the songs
$('.getLow').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.sorry').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.hotlineBling').click(function() {
pauseSong(randomSong, currentSong);
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.takeCare').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//fourth set of the songs
$('.fiveHours').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.calling').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.cityOfDreams').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.heroes').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//fifth set of the songs
$('.caDreaming').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.caCalling').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.caLoving').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.caLove').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

//sixth set of the songs
$('.illStandByYou').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.pleaseDontGo').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.neverGonna').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.iWillAlways').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//seventh set of the songs
$('.boyfriend').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.loveYourself').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.oneTime').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.oneLess').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//eight set of the songs
$('.smellsLike').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.stairway').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.backInBlack').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.enter').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//ninth set of the songs
$('.oneLove').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.mean').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.rude').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.alright').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//tenth set of the songs
$('.shake').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.partyRock').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('.partyHard').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('.shuffling').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//11th set of songs
$('#heyIJust').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#callMePlease').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#callMeLater').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#callMeMaybe').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

//12th set of songs
$('#yellowLights').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#greenLights').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#redLights').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#stopLights').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//13th set of songs
$('#photograph').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#photography').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#thinkOut').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#lovingCan').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//14th set of songs
$('#weAreFun').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#weAreYoung').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#letsSet').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#alwaysYoung').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//15th set of songs
$('#welcome').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#sweet').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#hotelCalifornia').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#calif').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//16th set of songs
$('#sheWillBeGone').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#she').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#sheWillBeLovingAgain').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#sheWillBeLoved').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

//17th set of songs
$('#irrep').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#toThe').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#werk').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#ifIWere').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//18th set of songs
$('#aSky').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#inMy').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#thePianist').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#paradise').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

//19th set of songs
$('#getLucky').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#punk').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#faster').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#upAll').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//20th set of songs
$('#whatMakes').click(function() {
pauseSong(randomSong, currentSong)
myStopFunction(countdownTimer);
var applause = document.getElementById("applause")
applause.autoplay = true;
applause.load();
$('.divRight').toggle(1000)
$('.divRight').toggle(5000)
setTimeout(function(){  hide() }, 5000);
});

$('#what').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#weAre').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

$('#you').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(5000)
var boo = document.getElementById("boo")
boo.autoplay = true;
boo.load();
});

//}
