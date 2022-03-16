var ddddddd = "dddddd"
var ssssssss = "ssssssss"
var dddddc = "dddddc"
var ffdfff = "ffdfff"
var fgfgdgfdd = "fgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfddfgfgdgfdd"
var intent = "0"
if ($(window).width() > 960) {
    
  document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
  }
  
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    });
  }
    

    function Notify(data2) {
      Load(data2)
    } 

    function Verificando(user) {
      Swal.fire({
        title: "<h4 onselectstart='false' style='color:#d1d1d1;'>Verifying</h4>",
        timer: 10,
        footer: '<a onselectstart="false" style="color:#d1d1d1;" href="http://bit.ly/DonateCondo" target="_blank" >Donate</a>',
        background: '#272727',
        onBeforeOpen: () => {
          Swal.showLoading()
          if (window.localStorage.getItem('Name')) {
           } else {
            window.localStorage.setItem('Name', user);
            myFunction(user)
          }
        },
        onClose: () => {
          clearInterval(timer)
        }
      }).then((result) => {
        console.clear()
      })
      console.clear()
    }

    


function Load(user) {
  $(location).attr('href', '/')
  console.clear()
  Swal.fire({
    title: "<h4 onselectstart='false' style='font-size: 130%;color:#d1d1d1;'>Redirecting...</h4>",
    timer: 10,
    footer: '<a onselectstart="false" style="color:#d1d1d1;" href="http://bit.ly/DonateCondo" target="_blank" >Donate</a>',
    background: '#272727',
    onBeforeOpen: () => {
      Swal.showLoading()

    },
    onClose: () => {
      clearInterval(timer)
    }
  }).then((result) => {
    console.clear()
  })
  console.clear()
}

function LoadPrivateGame() {
  localStorage.removeItem('Name')
  $(location).attr('href', '/verify')
  console.clear()
  Swal.fire({
    title: "<h4 onselectstart='false' style='font-size: 130%;color:#d1d1d1;'>Redirecting...</h4>",
    timer: 10,
    footer: '<a onselectstart="false" style="color:#d1d1d1;" href="http://bit.ly/DonateCondo" target="_blank" >Donate</a>',
    background: '#272727',
    onBeforeOpen: () => {
      Swal.showLoading()
      
    },
    onClose: () => {
      clearInterval(timer)
    }
  }).then((result) => {
    console.clear()
  })
 console.clear()
}



var url = "https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec"
var res = "?sheet=Global&key="

function AntiNoUser(login) {
  if (BuyMainS == false) {
    Swal.showValidationMessage(
      "<img src='loading.png'" + " width='5%' height='5%' style='animation: rotation 1.5s infinite linear;'>  <p style='margin: 5px; color:#ffffff;'>Searching...</p>",
      )
    return "d"
  }
  if (login == "" ) {
    if(jQuery('input').val().indexOf(' ') == 1){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>aPlease enter an valid username</p>`,
      )
      return "sds"
    }
  }
    
    if(jQuery('input').val().length >= 21){
      Swal.showValidationMessage( 
        `<p style='color:#eebaba;'>Usernames can be 3 to 20 characters long.</p>`,
        )
        return "a"
    }
    if(jQuery('input').val().split("_").length >= 3){
      Swal.showValidationMessage(
        `<p style='color:#eebaba;'>Usernames can have at most one _.</p>`,
        )
        return "a"
      }
    if(jQuery('input').val().length <= 2){
      Swal.showValidationMessage( 
        `<p style='color:#eebaba;'>Usernames can be 3 to 20 characters long.</p>`,
        )
        return "a"
  }
  if(jQuery('input').val().indexOf('_') >= jQuery('input').val().length-1){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames cannot start or end with _.</p>`,
      )
      return "s"
  }
  
  if(jQuery('input').val().indexOf('_') == 0){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames cannot start or end with _.</p>`,
      )
      return "s"
  }
  
    if(jQuery('input').val().indexOf(' ') >= 0){
      Swal.showValidationMessage(
        `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
        )
        return "a"
    }
    var format = /[!@#$%^&*()+\-=\[\]´{}ñ;¡¿•`‹›‘×`÷Ωμπ√~€¬·':"\\|,.<>\/?]+/;
    if(format.test(jQuery('input').val())){
      Swal.showValidationMessage(
        `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
        )
        return "a"
  }
  return
}


function GetUserName() {
  $(document).ready(function(){
    jQuery('input').on('input', function(property) {
      
      AntiHackServer(jQuery('input').val())
    });
    
    jQuery('input').focusout(function() {
      NoFocus(jQuery('input').val())
    });
  });
  Swal.fire({

    title: "<h4 onselectstart='false' style='color:#fffff;'>Ebic Condos</h4>",
    html: "<h4 onselectstart='false' style='background-color:#191919;border-radius:14px;font-size: 90%;box-shadow:0 0 3px #c3c3c3!important;color:#bebebef9;padding:5px;'>We just need your username. It will not be shared and is only to verify that you are not a robot or to obtain HeadAdmin benefits if you purchased it.</h4>",
    input: "text",
    cancelButtonColor: "#008d18f9",
    confirmButtonColor: "#008d18f9",
    allowOutsideClick: true,
    inputPlaceholder: 'Enter your Roblox UserName',
    inputClass: 'custom-input-class',
    footer: "<img src='discord.png'" + " style='margin: 6px;' position: absolute; width='8%' height='8%'>" + '<a onselectstart="false" style="margin-right: 25px;color:#969696;" href="http://bit.ly/EbicDiscord" target="_blank">EBIC CONDO | DISCORD </a>' + "<p></p>" + "<img src='group.png'" + " style='margin: 6px;' width='6%' height='6%'>" + '<a onselectstart="false" style="color:#969696;" href="https://www.roblox.com/groups/7527621/Ebic-Rbx#!/about" target="_blank">EBIC RBX | GROUP </a>'  ,
    inputAttributes: {
      autocapitalize: 'off',
      id: "username",
    },
    //showCancelButton: true,
    confirmButtonText: "Verify my username",
    cancelButtonText: "Get public games",
    showLoaderOnConfirm: true,
    background: '#1a1a1af9',
    backdrop: `#1a1a1af9`,

    preConfirm: (login) => { 
      AntiNoUser(login)

    },


  allowOutsideClick: () => !Swal.isLoading()



  
}).then((resultado) => {
  if(resultado.value){
   //Verificando(resultado.value)
   //Notify(resultado.value)
  }  
  
 // Notify(resultado.value)

  //Load(resultado.value)
})
}








function UserVerificated(RobloxUser) {
  Swal.fire({
    title: "<h4 onselectstart='false' style='font-size: 130%; color:#fffff;'>You are verified as " + RobloxUser + "!</h4>",
    cancelButtonColor: "#008d18f9",
    confirmButtonColor: "#0e6ddaf9",
    allowOutsideClick: true,
    footer: "<img src='discord.png'" + " style='margin: 6px;' position: absolute; width='8%' height='8%'>" + '<a onselectstart="false" style="margin-right: 25px;color:#969696;" href="http://bit.ly/EbicDiscord" target="_blank">EBIC CONDO | DISCORD </a>' + "<p></p>" + "<img src='group.png'" + " style='margin: 6px;' width='6%' height='6%'>" + '<a onselectstart="false" style="color:#969696;" href="https://www.roblox.com/groups/7527621/Ebic-Rbx#!/about" target="_blank">EBIC RBX | GROUP </a>'  ,
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: "Homepage",
    cancelButtonText: "Use another username",

    background: '#252525',
    backdrop: `#1a1a1af9`,

  allowOutsideClick: () => !Swal.isLoading()



  
}).then((resultado) => {
  if(resultado.value){
    Load()
}else if(resultado.dismiss == 'cancel'){
  LoadPrivateGame()
}

})
}








GetUserName()
window.localStorage.getItem('Name')
if (window.localStorage.getItem('Name')) {
  UserVerificated(window.localStorage.getItem('Name'))
  //Load("")
}


var antispam
var UserNameConst 
function AntiHackServer(key) {
  if(key.length >= 21){
    Swal.showValidationMessage( 
      `<p style='color:#eebaba;'>Usernames can be 3 to 20 characters long.</p>`,
      )
      return "s"
  }
 
    if(key.split("_").length >= 3){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames can have at most one _.</p>`,
      )
      return "s"
    }

  if(key.indexOf(' ') >= 0){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "s"
  }

  if(key.indexOf('_') == 0){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames cannot start or end with _.</p>`,
      )
      return "s"
  }
  var format = /[!@#$%^&*()+\-=\[\]´{}ñ;¡¿•`‹›‘×`÷Ωμπ√~€¬·':"\\|,.<>\/?]+/;
  if(format.test(key)){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "s"
    }
    antispam = ""
}

var BuyMainS = false
function NoFocus(key) {
  if (antispam == key) {
    return "a"
  }
  BuyMainS = true
  if (jQuery('input').val() != "") {
    if(jQuery('input').val().indexOf('_') >= jQuery('input').val().length-1){
      Swal.showValidationMessage(
        `<p style='color:#eebaba;'>Usernames cannot start or end with _.</p>`,
        )
        return "s"
    }
  }
  
  if(jQuery('input').val().length <= 2){
    return "a"
  }

  if(key.length >= 21){
    return "s"
  }
 
    if(key.split("_").length >= 3){
      return "s"
    }

  if(key.indexOf(' ') >= 0){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "s"
  }



  if(key.length >= 21){
    Swal.showValidationMessage( 
      `<p style='color:#eebaba;'>Usernames can be 3 to 20 characters long.</p>`,
      )
      return "s"
  }
 
    if(key.split("_").length >= 3){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames can have at most one _.</p>`,
      )
      return "s"
    }

  if(key.indexOf(' ') >= 0){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "s"
  }
  
  var format = /[!@#$%^&*()+\-=\[\]´{}ñ;¡¿•`‹›‘×`÷Ωμπ√~€¬·':"\\|,.<>\/?]+/;
  if(format.test(key)){
    Swal.showValidationMessage(
      `<p style='color:#eebaba;'>Usernames may only contain letters, numbers, and _.</p>`,
      )
      return "s"
    }
       Swal.showValidationMessage(
        "<img src='loading.png'" + " width='5%' height='5%' style='animation: rotation 1.5s infinite linear;'>  <p style='margin: 5px; color:#ffffff;'>Searching...</p>",
   )
   BuyMainS = false
   jQuery('input').attr('disabled', 'disabled');

  fetch(url + res + key)

    .catch(error => {
      console.clear()
    Swal.showValidationMessage(
      "<img src='loading.png'" + " width='5%' height='5%' style='animation: rotation 1.5s infinite linear;'>  <p style='color:#ffffff;'>A connection problem occurred. Retrying...</p>",
      )
      setTimeout(() => {NoFocus(jQuery('input').val()); }, 5000);
      
    })


    .then(function(response) {
      console.clear()
      jQuery('input').removeAttr('disabled');
      return response.json();
   })
   .then(function(data) {
    console.clear()
    
     if (data.response.errorMessage == "User not found") {
      Swal.showValidationMessage(
        `<p style='color:#eebaba;'>User not found</p>`,
        )
        return "a"
      } else {
        
        
        if (jQuery('input').val() == key) {
          BuyMainS = true
          antispam = key
          UserNameConst = data.response.Username
        var ImgKey = "<img src='http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=" + key + "'";
       Swal.showValidationMessage(
         ImgKey + " width='9%' height='9%'>  <p style='color:#3db328;'>✔️" + data.response.Username + "</p>",
        )
        return Verificando(UserNameConst)
      }
      }
      
      
       });




    
}

function myFunction(u) {
UserVerificated(u)

  }


  document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
      if (jQuery('input').is(":focus")) {
        jQuery('input').trigger('blur');
        NoFocus(jQuery('input').val())
      }
    }
});

