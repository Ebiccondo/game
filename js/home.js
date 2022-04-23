/*
const dasd = "Ge"
const dsdsff = "t"
const sdfdsf = "Ga"
const xcvxc = "me"
const dfgdfg = "D"
const url = "https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec"
const res = "?sheet=Global&key="
*/
var GlobalGameID = null

function GetData(PlaceID) {
    $('#CaptchaGame').css('display', 'none');
    $('#GameLoading').css('display', 'block');
    var GetUniverseID = url + res + "GetGameName" + PlaceID
    fetch(GetUniverseID)
    .then(function(response) {
         return response.json();
     })
     .then(function(data) {
        var PlaceName = data.response[0].name
        var PlaceDesc = data.response[0].description
        var Playing = data.response[0].playing
        $('#GameName').text(PlaceName)
        //$('#CaptchaGame').text(PlaceDesc)
        //$('#CaptchaGame').text(Playing)
        GlobalGameID = PlaceID
        setCookie("GameId", GlobalGameID, 1)
        $('#GameLoading').css('display', 'none');
        $('#CaptchaGame').css('display', 'none');
        $('#GameCurrent').css('display', 'block');
     }); 
}


function TEST() {
    $('#CaptchaGame').css('display', 'none');
    $('#GameLoading').css('display', 'block');
    fetch("https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec?sheet=Global&key=GetGameD")
    .then(function(response) {
       return response.json();
     })
     .then(function(data) {
       var PlaceID = data.response
       var GetUniverseID = "https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec?sheet=Global&key=" + "GetGameName" + PlaceID
       fetch(GetUniverseID)
       .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           var PlaceName = data.response[0].name
        var PlaceDesc = data.response[0].description
        var Playing = data.response[0].playing
        $('#GameName').text(PlaceName)
        //$('#CaptchaGame').text(PlaceDesc)
        //$('#CaptchaGame').text(Playing)
        GlobalGameID = PlaceID
        setCookie("GameId", GlobalGameID, 2)
        setCookie("GameInfo", PlaceName+","+Playing, 2)

        $('#GameLoading').css('display', 'none');
        $('#CaptchaGame').css('display', 'none');
        $('#GameCurrent').css('display', 'block');
        }); 
   });
}


LoadGame()
//TEST()



 /*
function GetBasePlateToGame(data) {
   
    var HtmlData = GetBasePlateToGame(data.response[0])
    $(".food_section").append(HtmlData);
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');
        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
         })
     });
     var $grid = $(".grid").isotope({
         itemSelector: ".all",
         percentPosition: false,
         masonry: {
             columnWidth: ".all"
         }
    })
    const name = data.name
    const desc = data.description
    const playing = data.playing
    const Id = data.rootPlaceId
    //const section = data.Sec
    var HtmlBase = `
    <div id='OthersGames' class="container">
    <div class="heading_container heading_center">
      <h2>
        More Condo Games
      </h2>
    </div>

    <ul class="filters_menu">
      <li class="active" data-filter="*">All</li>
      <li data-filter=".R15">R15</li>
      <li data-filter=".R6">R6</li>
      <li data-filter=".FD">From Discord</li>
      <li data-filter=".Others">Others</li>
    </ul>

    <div class="filters-content">
      <div id="MainPostGamesList" class="row grid">

      <div id='${Id}' class='col-sm-6 col-lg-4 all R6'>
      <div class='box'>
        <div>
          <div class="img-box">
            <img src="/images/gamesx2.png" alt="">
          </div>
          <div class="detail-box">
            <h5>
              ${name}
            </h5>
            <p>
            ${desc}
            </p>
            <div class="options">
              <h6>
                <i class="fa-solid fa-user-group"></i>
                ${playing} PLAYING
              </h6>
              <a onclick="PlayGame(${Id})">
                <i class="fa-solid fa-play"></i>
              Play</a>
            </div>
          </div>
        </div>
      </div>
    </div>


      </div>
    </div>
    <div class="btn-box">
      <a href="/PostCondoGames">
        Post Condo Game
      </a>
    </div>
  </div>

`
return HtmlBase
}
*/
function ClosePopup() {
    $("#recaptcha2").appendTo("#LoadCaptcha");
    Swal.close()
}

function FindGame() {
    console.clear()
    var close = '<a id="closePopup" onclick="ClosePopup()">Close</a>'
    var center = '<div class="heading_container heading_center">'
    var captchadiv = '<div id="recaptcha1"></div></div>'
    let GameIdS = getCookie("GameId");
    if (GameIdS != "") {
        GlobalLoadGame(GameIdS)
        return
    }
    if (home == false) {
        close = '<a id="closePopup" onclick="Swal.close()">Close</a>'
        captchadiv = '<div id="recaptcha2"></div></div>'
    }
    if (GlobalGameID != null) {
        GlobalLoadGame()
    } else {
        
        Swal.fire({
            title: "<h4 onselectstart='false' style='font-size: 115%;color:#d1d1d1;'>Solve the captcha</h4>",
            timer: 100000000000000,
            html: center+captchadiv,
            footer: close,
            background: '#1c223c',
            showConfirmButton: false,
          }).then((result) => {
            console.clear()
        })
          console.clear()
          if (home != false) {
            $("#recaptcha2").appendTo("#recaptcha1");
          } else {
            close = '<a id="closePopup" onclick="Swal.close()">Close</a>'
            captchadiv = '<div id="recaptcha2"></div></div>'
            onloadCallback()
        }
    }
}


function LoadGameSwal() {
    Swal.fire({
        title: "<h4 onselectstart='false' style='font-size: 115%;color:#d1d1d1;'>Looking for game available...</h4>",
        timer: 100000000000000,
        background: '#1c223c',
        showConfirmButton: false,
        onBeforeOpen: () => {
            Swal.showLoading()
        },
      }).then((result) => {
        console.clear()
      })
}

function LoadGame() {
    if (home != false) {
        $('#CaptchaGame').css('display', 'block');
        $('#GameCurrent').css('display', 'none');
        $('#GameLoading').css('display', 'none');
    }
}

function GlobalLoadGame(id) {
    if (id != null) {
        var appWindow = window.open(`https://roblox.com/games/` + id, "_blank");
        setTimeout( function () {if (appWindow) {
          appWindow.location =`https://roblox.com/games/` + id;
        }
      },1000);
      return
    }
    var appWindow = window.open(`https://roblox.com/games/` + GlobalGameID, "_blank");
    setTimeout( function () {if (appWindow) {
      appWindow.location =`https://roblox.com/games/` + GlobalGameID;
    }
  },1000);
}


function setCookie(cname, cvalue, hours) {
    const d = new Date();
    d.setTime(d.getTime() + (hours*3*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
var verifyCallback = function(response) {
    onSubmit(response)
};

function onSubmit(token) {
    alert("response")
    const tok = token.toString()
    const value_data = [tok, tok]
    $.ajax({
      type: 'POST',
      url: "https://ebic.onrender.com/PostMainGames/",
      headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
      data: JSON.stringify(value_data),
      contentType: 'application/json',
      error: function (Guser) {
          alert("error")
          GetData("CaptchaFalled")
      },
      success: function (Guser) {
        alert("Noerror")
        GetData(Guser)
    }}
    LoadGameSwal()
)};

var onloadCallback = function() {
    grecaptcha.render('recaptcha2', {
        'sitekey' : '6LcidH0fAAAAAExEiCClIOfIfrL_TpQs1gjH1mIm',
        'callback' : verifyCallback,
        'theme' : 'dark'
    });
    setTimeout(() => { swal.hideLoading()}, 8); 
}





$( document ).ready(function() {
    
        
    var a = '<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>'
    $("body").append(a)
    
   if (window.localStorage.getItem('Name')) {
   } else {
    let TokenValidate = (Math.random() + 1).toString(36).substring(7);
    window.localStorage.setItem('Name', TokenValidate)
   }
    if (home != false) {
       // onloadCallback()
    };
});  
    





let GameIdS = getCookie("GameInfo");
if (home != false) {
    if (GameIdS != "") {
        var inforPart = GameIdS.split(",")
        var IName = inforPart[0]
        var IPlaying = inforPart[1]
        GlobalGameID = getCookie("GameId")
        $('#GameName').text(IName)
        $('#CaptchaGame').css('display', 'none');
        $('#GameCurrent').css('display', 'block');
        $('#GameLoading').css('display', 'none');
     }
}
