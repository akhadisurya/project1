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

    $('.divRight').hide(0)
    $('.divWrong').hide(0)
}

//get a random song
function randomStartBtn () {
        var randomSong = Math.random();
        if (randomSong  <= 0.25) {
        $('.theOne').fadeIn(7000)
        $('.iWantItThatWay').fadeIn(7000)
        $('.quitPlayingGamesWithMyHeart').fadeIn(7000)
        $('.getDown').fadeIn(7000)
       // rightOrWrong()


        }else if (randomSong <= 0.50) {
        $('.darkHorse').fadeIn(7000)
        $('.style').fadeIn(7000)
        $('.hello').fadeIn(7000)
        $('.imNotTheOnlyOne').fadeIn(7000)
        //rightOrWrong()

        }else if (randomSong <= 0.75) {
        $('.getLow').fadeIn(7000)
        $('.sorry').fadeIn(7000)
        $('.hotlineBling').fadeIn(7000)
        $('.takeCare').fadeIn(7000)

      }else {
        $('.fiveHours').fadeIn(7000)
        $('.calling').fadeIn(7000)
        $('.cityOfDreams').fadeIn(7000)
        $('.heroes').fadeIn(7000)
      }
    }


$('.startBtn').click(randomStartBtn);

//function rightOrWrong () {
//first set of the songs
$('.theOne').click(function() {
$('.divRight').toggle(1000)
$('.divRight').toggle(4000)

  setTimeout(function(){  hide() }, 4000);
});

$('.iWantItThatWay').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
});

$('.quitPlayingGamesWithMyHeart').click(function() {
$('.divWrong').toggle(1000)
$('.divWrong').toggle(4000)
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

//}


