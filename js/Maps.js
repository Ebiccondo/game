

var old = ""
var Issues = false
var Others = false



































$( "#CreatePublicGame" ).click(function() {
  GeneratePublicGame("Public")
});

$( "#PrivateCondo" ).click(function() {
    GeneratePriv()
});

$( "#PublicCondo" ).click(function() {
    //FindGame()
});



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






const dasd = "Ge"
const dsdsff = "t"
const sdfdsf = "Ga"
const xcvxc = "me"
const dfgdfg = "D"
const prv = "Priva"
const td = "te"
const url = "https://script.google.com/macros/s/AKfycbx3gYi1rSt5mXZ40w3fa5uvaroX0V3n_xND7QnvzmwK9rCSAHM/exec"
const res = "?sheet=Global&key="
function TimeLmit() {
  Swal.fire({
      title: "<h4 onselectstart='false' style='font-size: 115%;color:#d1d1d1;'>Time limit</h4>",
      html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >You can only create games every 5 hours, buy HeadAdmin to remove limit</h7>`,
      background: '#252e50',
      confirmButtonText: 'Buy HeadAdmin',
      cancelButtonColor: "#535353",
      confirmButtonColor: "#0e6ddaf9",
      showCancelButton: true,
      focusCancel: false,
      focusConfirm: false,
      cancelButtonText: "Close",
  }).then((result) => {
    if(result.dismiss == 'cancel'){
    }else{
      window.open('/HeadAdmin', '_self');
    }
  })
}




const uploadURL = "https://script.google.com/macros/s/AKfycbxMEBctYQ72v6LFY0BRKGsauKAbDYrEzBtbC57mL4dAA-g8OIA/exec"


function GameFalled() {
    Swal.fire({
        title: "<h4 onselectstart='false' style='font-size: 115%;color:#d1d1d1;'>Condo game was banned</h4>",
        background: '#252e50',
        confirmButtonText: 'Bump condo',
        cancelButtonColor: "#535353",
        confirmButtonColor: "#0e6ddaf9",
        showCancelButton: true,
        focusCancel: false,
        focusConfirm: false,
        cancelButtonText: "Close",
    }).then((result) => {
      if(result.dismiss == 'cancel'){
      }else{
       return  GeneratePublicGame("Public")
      }
    })
}


function GetDataCLOSED(gameIDD) {
  if (gameIDD == "CaptchaFalled") {
    Swal.fire({
      title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Error</h4>",
      html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Internal Server Error</h7>`,
      confirmButtonText: 'Close',
      cancelButtonColor: "#373737",
      confirmButtonColor: "#373737",
      showConfirmButton: true,
      cancelButtonText: "Close",
      focusCancel: false,
      focusConfirm:false,
      background: '#212121',
    }).then((result) => {
    })
  } else {
    Swal.fire({
      title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Public Condo Game</h4>",
      html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >The game is available</h7>` + `<h6 id="CoppyGane" style="text-align: center; font-size: 90%;" >https://roblox.com/games/` + gameIDD + `</h6>`,
      confirmButtonText: 'Play directly',
      cancelButtonColor: "#525252",
      confirmButtonColor: "#0a8f0a",
      showCancelButton: true,
      cancelButtonText: "Close",
      focusCancel: false,
      focusConfirm:false,
      background: '#212121',
      preConfirm: () => {
          console.clear()
          var appWindow = window.open(`https://roblox.com/games/` + gameIDD, "_blank");
          setTimeout( function () {if (appWindow) {
            appWindow.location =`https://roblox.com/games/` + gameIDD;
          }
        },1000);
        }
    }).then((result) => {
    })
  }
}

var OldConfig = null
var FLD = null
const captchaDivId = 'funcaptcha'


function onhidenData() {
  $('.swal2-footer').css('display', 'none');
}

function setupEnforcement(myEnforcement, EbicData) {
  OldData = EbicData
  //return LoadCookieFrame(EbicData)
  Swal.fire({
    html:`<div id="${captchaDivId}"></div>`,
    timer: 50000000,
    customClass: 'swal-wide',
    footer: '<a id="CError" onselectstart="false"  onclick="LoadCFalled(0)" >Captcha doesnt load</a>',
    heightAuto: false,
    showConfirmButton:false,
    background: '#252e50',
    onBeforeOpen: () => {
      Swal.showLoading()
      $('.swal2-footer').css('display', 'none');
    },
  }).then((result) => {
  })
  if (myEnforcement != "NoData") {
    FLD = myEnforcement.split(",")
    ID = FLD[0]
    fd = FLD[1]
    return new ArkoseEnforcement({
      public_key:"A2A14B1D-1AF3-C791-9BBC-EE33CC7A0A6F",
      callback: (token) => {
        OnSolve(OldData, ID+","+token, 1)
        console.clear()
      },
      target_html:captchaDivId,
      onshown:swal.hideLoading,
      data:{blob:fd}  
     })
  }

  return $.ajax({
    type: 'GET',
    url: "https://ebic.onrender.com//GndjLSPldMkdN/",
    headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
    success: function (Guser) {
      
      console.clear()
      
      FLD = Guser.FLD
      ID = FLD[0]
      fd = FLD[1]
      new ArkoseEnforcement({
        public_key:"A2A14B1D-1AF3-C791-9BBC-EE33CC7A0A6F",
        callback: (token) => {
          OnSolve(EbicData, ID+","+token, 1)
          console.clear()
        },
        onshown: () => {
        // $('.swal2-footer').css('display', 'block')
         $('.swal2-styled').css('display', 'none')
          
        },
        
        target_html:captchaDivId,
        loaded_callback:onhidenData,
        data:{blob:fd}  
       })
    }
  })

}



function FindGameCLOSED() {

    console.clear()
    Swal.fire({
      title: "<h4 onselectstart='false' style='font-size: 115%;color:#d1d1d1;'>Getting public condo</h4>",
      timer: 100000000000000,
      footer: '<div id="recaptcha2"></div>',
      background: '#252e50',
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
    }).then((result) => {
      console.clear()
    })
    console.clear()
    onloadCallback()
    
}

function Load2() {
  //GetData()
  console.clear()
}



async function Upload(Name) {

    fetch(uploadURL + res + Name)
    .then(function(response) {
     console.clear()
       return response.json();
     })
     .then(function(data) {
         if (data.result) {
            return data
         } else {
            return "0"
         }
         
   });
}


function OnSolve(data, data2, intent) {
  console.clear()
  Tokens = btoa(data2)
  const value_data = [data[0], data[1], data[2], data[3],  Math.round(new Date().getTime()/1000), data[5], data[6],  data[7], data[8], Tokens]
 
    $.ajax({
      type: 'POST',
      url: "https://ebic.onrender.com//PostData/",
      headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
      data: JSON.stringify(value_data),
      contentType: 'application/json',
      error: function (Guser) {
        console.clear()
        if (intent == 3) {
          setTimeout(() => { 
          return Swal.fire({
            title: "<h4 onselectstart='false' style='line-height: 43px; font-size: 130%;color:rgb(244, 244, 244);'>Error</h4>",
            html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >An error occurred while creating the account, please try again</h7>`,
            icon: "error",
            background: '#252e50',
            confirmButtonColor: "#0e6ddaf9",
            heightAuto: false,
            showConfirmButton:true,
          }).then((result) => {
            location.reload();
          })
        }, 2990);
        } else {
          return OnSolve(data, data2, intent + 1)
        }
      },
      success: function (Guser) {
        
        const GID = Guser["data"]
        console.clear()
        FLD = null
        if (data[3] == "Private") {
          window.localStorage.setItem('Game', GID)
          Swal.fire({
            title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Your condo game</h4>",
            html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Your game has been created successfully. We recommend you play 5 or 10 minutes after creating the game, this message will appear when you enter the web</h7>` + `<h6 id="CoppyGane" style="text-align: center; font-size: 90%;" >https://roblox.com/games/` + window.localStorage.getItem('Game') + `</h6>`,
            confirmButtonText: 'Play directly',
            cancelButtonColor: "#0e6ddaf9",
            confirmButtonColor: "#0a8f0a",
            showCancelButton: true,
            cancelButtonText: "Share",
            focusCancel: false,
            focusConfirm:false,
            background: '#212121',
            preConfirm: () => {
              var GetUniverseID = url + res + "GetUniverseID" + window.localStorage.getItem('Game')
              return fetch(GetUniverseID)
              .then(function(response) {
               console.clear()
               return response.json();
              })
              .then(function(data) {
                console.clear()
                UniverseID = data.response
                //window.localStorage.getItem('Game')
                var appWindow = window.open(`https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D${UniverseID}&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F${window.localStorage.getItem('Game')}`,"_blank");
                setTimeout( function () {if (appWindow) {
                  location.reload()
                }
              },1000);
              })
              }
           
            }).then((result) => {
              if(result.dismiss == 'cancel'){
                const whatsAppURL = `https://wa.me?text=${encodeURIComponent('Play this awesome roblox condo: https://roblox.com/games/' + window.localStorage.getItem('Game') )}`;
                window.open(whatsAppURL, '_blank');
                location.reload()
              }
            })

          } else {
            const replaced = GID.toString().slice(0, -5) + '*****'
            
            Swal.fire({
              title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Public game created!</h4>",
              html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >The game was added to the list of public games.</h7>`,
              confirmButtonText: 'Close and create more',
              cancelButtonColor: "#0e6ddaf9",
              confirmButtonColor: "#0a8f0a",
              showCancelButton: false,
              cancelButtonText: "Closer",
              focusCancel: false,
              focusConfirm:false,
              background: '#212121',
              preConfirm: () => {
                  location.reload()
                }
              }).then((result) => {
                if(result.dismiss == 'cancel'){
                  location.reload()

                }
              })
        }
        },
        timeout: 65000
      })

      setTimeout(() => { Swal.fire({
        title: "<h4 onselectstart='false' style='line-height: 43px; font-size: 115%;color:rgb(244, 244, 244);'>generating condo</h4>",
        background: '#252e50',
        timer: 5000000,
        heightAuto: false,
        showConfirmButton:false,
        onBeforeOpen: () => {
          Swal.showLoading()
        },
      }).then((result) => {
        console.clear()
      }) }, 480);

}



function OnSolve2(data, data2, intent) {
  console.clear()
  Tokens = data2
  const value_data = [data[0], data[1], data[2], data[3],  Math.round(new Date().getTime()/1000), data[5], data[6],  data[7], Tokens]
 
    $.ajax({
      type: 'POST',
      url: "https://ebic.onrender.com//PostData2/",
      headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
      data: JSON.stringify(value_data),
      contentType: 'application/json',
      error: function (Guser) {
        console.clear()
        if (intent == 3) {
          setTimeout(() => { 
          return Swal.fire({
            title: "<h4 onselectstart='false' style='line-height: 43px; font-size: 130%;color:rgb(244, 244, 244);'>Error</h4>",
            html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Error generating the game or
            the cookie is invalid or
            the account is verified or
            Internal Server Error</h7>`,
            icon: "error",
            background: '#252e50',
            confirmButtonColor: "#0e6ddaf9",
            heightAuto: false,
            showConfirmButton:true,
          }).then((result) => {
            location.reload();
          })
        }, 2990);
        } else {
          return OnSolve2(data, data2, intent + 1)
        }
      },
      success: function (Guser) {
        
        const GID = Guser["data"]
        console.clear()
        FLD = null
        if (data[3] == "Private") {
          window.localStorage.setItem('Game', GID)
          Swal.fire({
            title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Your condo game</h4>",
            html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Your game has been created successfully. We recommend you play 5 or 10 minutes after creating the game, this message will appear when you enter the web</h7>` + `<h6 id="CoppyGane" style="text-align: center; font-size: 90%;" >https://roblox.com/games/` + window.localStorage.getItem('Game') + `</h6>`,
            confirmButtonText: 'Play directly',
            cancelButtonColor: "#0e6ddaf9",
            confirmButtonColor: "#0a8f0a",
            showCancelButton: true,
            cancelButtonText: "Share",
            focusCancel: false,
            focusConfirm:false,
            background: '#212121',
            preConfirm: () => {
              var GetUniverseID = url + res + "GetUniverseID" + window.localStorage.getItem('Game')
              return fetch(GetUniverseID)
              .then(function(response) {
               console.clear()
               return response.json();
              })
              .then(function(data) {
                console.clear()
                UniverseID = data.response
                //window.localStorage.getItem('Game')
                var appWindow = window.open(`https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D${UniverseID}&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F${window.localStorage.getItem('Game')}`,"_blank");
                setTimeout( function () {if (appWindow) {
                  location.reload()
                }
              },1000);
              })
              }
           
            }).then((result) => {
              if(result.dismiss == 'cancel'){
                const whatsAppURL = `https://wa.me?text=${encodeURIComponent('Play this awesome roblox condo: https://roblox.com/games/' + window.localStorage.getItem('Game') )}`;
                window.open(whatsAppURL, '_blank');
                location.reload()
              }
            })

          } else {
            const replaced = GID.toString().slice(0, -5) + '*****'
            
            Swal.fire({
              title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>Public game created!</h4>",
              html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >The game was added to the list of public games.</h7>` + `<h6 id="CoppyGane" style="text-align: center; font-size: 90%;" >https://roblox.com/games/` + replaced + `</h6>`,
              confirmButtonText: 'Close and create more',
              cancelButtonColor: "#0e6ddaf9",
              confirmButtonColor: "#0a8f0a",
              showCancelButton: false,
              cancelButtonText: "Closer",
              focusCancel: false,
              focusConfirm:false,
              background: '#212121',
              preConfirm: () => {
                  location.reload()
                }
              }).then((result) => {
                if(result.dismiss == 'cancel'){
                  location.reload()

                }
              })
        }
        },
        timeout: 15000
      })

      setTimeout(() => { Swal.fire({
        title: "<h4 onselectstart='false' style='line-height: 43px; font-size: 115%;color:rgb(244, 244, 244);'>generating condo</h4>",
        background: '#252e50',
        timer: 5000000,
        heightAuto: false,
        showConfirmButton:false,
        onBeforeOpen: () => {
          Swal.showLoading()
        },
      }).then((result) => {
        console.clear()
      }) }, 480);

}




function FunCaptchaLoader(data) {
  captchaWorker(data)
}



/*
const value_data = ["_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_D59971FAD0F8D551DF16F9B7C031D16B8C0EC62A829D34AA5C9631FFD25EAF8C7356C606976D3D6231ABDD46C11834013994535E4E296935DE8C9C31FD0D66CCCD8D3EEF46A87C944E65C9E41F8C15B508F2EA8354B3678793FA7BB5F7C25986EA4FEB9DF321E2F5798117E51139C0EB357F3855F3B4D7941F2666F5E4E18056ABC4917576869F53E5744DF196612F827469CC6082F04300F112045FD40855BD614ED7593BAAE2880102457E787C60EA6107C72E9ADD804455FEEB2B3EA6C7D48E5FAE800D80CBEA1A895D3B3E2CBE2862AF753DF6B9B1CEFB5DCEE6DF1AE22684BB7D8D2AF4388AD4C46E67378A54CA88E5CC8FD8728BDF9CAA56232E03A29D2C0BBEE6A86659E8CDBBD071F80AD48F1AC03B7CBBE38E6855D2342B4AD131F9B46589654F7F767F41B92EBBE4E48D52C08234029A809B2CC4AF7DB9B0786CAB4C6E54887E8708C94476F6C45F77E6A1604156DC"]
    $.ajax({
      type: 'POST',
      url: "https://ebic.onrender.com//PostByCookie/",
      headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
      data: JSON.stringify(value_data),
      contentType: 'application/json',
     
      success: function (Guser) {
        const GID = Guser["data"]
        console.clear()
        FLD = null
        if (data[3] == "Private") {
          window.localStorage.setItem('Game', GID)
        }
        },
        timeout: 65000
  })

    


*/





const captchaWorker=async(data)=>{
/*
  $.ajax({
    type: 'GET',
    url: "https://ebic.onrender.com/GndjLSPldMkdN/",
    headers: {  'Access-Control-Allow-Origin': 'https://ebic.onrender.com/' },
    success: function (Guser) {
      new FunCaptcha({
        public_key: "A2A14B1D-1AF3-C791-9BBC-EE33CC7A0A6F",
        target_html: captchaDivId,
        site:"https://www.roblox.com",
        data:{blob:Guser.FLD[1]}, // "vHtFR7C2Pa7HYSxbuSbVvH,FswzJ7Or6+8U5h+0.Vb+PX+3cGExqVsxo1iMaVQi+/dQVUm5eOPGplyQBxiE2SMCI1wHXvehMOGTNRb3pOvR1fZHETtxxEIGJUP2ei3NbHvEsAg9aoggSuSbNZX1/elRecu0GvdtFeT1hQDXdiSx+5q0MH+igp4YC58wUSpnddDNdFMN2LU3FTVSQ3WFKJl6CBGU6BIlDTIxGBJapsGIuKtafkHKFqGDqFw0dXLsQkch8JZU9SEdeYXTUcy5SIGfmhW2W7Qwd8k9z/7t3cSfS/KTRFwFeQF/rFNzPWuDkdFdbsc+42pzEbKQuVX5DueV9JuApuxX2vg=="},
        callback: (token) => {
          
          OnSolve(data, Guser.FLD[0]+","+token, 1)
        }
      });
    }
  })
  */
}
const AdminUrl = "https://script.google.com/macros/s/AKfycbyWpgyBjSEJ683RXn6LrQ7QQT5rSodM21KgNULo81vhfVD5mZ8/exec"
const GetGlobal = "?sheet=Global&key="



function GetDST() {
  if (IsScript == null) {
    console.clear()
  }
  LoadGameLINK()
  if (window.localStorage.getItem('Name')) {
    fetch(url + res + dasd + dsdsff + sdfdsf + xcvxc + dfgdfg)
    
    .then(function(response) {
      console.clear()
      return response.json()
    })
    .then(function(data) {
      console.clear()
      document.getElementById("Games").innerHTML = btoa(data.response)
    })
    
    $.ajax({
      type: 'GET',
      url: AdminUrl + GetGlobal + window.localStorage.getItem('Name'),
      error: function (response_data) {
        $('#BaseLoadings').css('display', 'none');
        $('#error').css('display', 'block');
      },
      success: function (response_data) {
        console.clear()
        const Range = response_data
        if (Range.error) {
          document.getElementById("List").innerHTML = btoa("NoHeadAdmin")
        } else {
          document.getElementById("List").innerHTML = btoa("HeadAdmin")
        }
      }
    })
    console.clear()
    const unixDD =  Math.round(new Date().getTime()/1000)
    $.ajax({
      type: 'GET',
      url: 'https://api.ipify.org/?format=json',
      //data: JSON.stringify(value_data),
      //contentType: 'application/json',
      error: function (Guser) {
        $('#BaseLoadings').css('display', 'none');
        $('#error').css('display', 'block');
      },
      success: function (IPV) {
        console.clear()
        const ipv4 = IPV.ip
        $.ajax({
          type: 'GET',
          url: uploadURL + res + ipv4,
          //data: JSON.stringify(value_data),
          //contentType: 'application/json',

          error: function (Guser) {
            console.clear()
            $('#BaseLoadings').css('display', 'none');
            $('#error').css('display', 'block');
          },
          success: function (Guser) {
            $('#BaseLoadings').css('display', 'none');
            $('#MainBase').css('display', 'block');
            
            console.clear()
            if (Guser.error) {
             
              $.ajax({
                type: 'GET',
                url: uploadURL + res + window.localStorage.getItem('Name'),
                error: function (Guser) {
                  $('#BaseLoadings').css('display', 'none');
                  $('#error').css('display', 'block');
                },

                success: function (ResData) {
                  
                  console.clear()
                  if (ResData.error) {
                    document.getElementById("Brands").innerHTML = btoa(unixDD + "," + ipv4)
                  } else {
                    UnixValue = ResData.value.split(",")
                    const OldTime = UnixValue[1]
                    if (unixDD - OldTime <= 18000 ) {
                      document.getElementById("Brands").innerHTML = btoa("KSJDncjdKSo") // limit
                    } else {
                      document.getElementById("Brands").innerHTML = btoa(unixDD + "," + ipv4)
                    }
                  }
                }
              })
            } else {
              console.clear()
              var UnixValue = Guser.value.split(",")
              const OldTime = UnixValue[1]
              if (unixDD - OldTime <= 18000 ) {
                document.getElementById("Brands").innerHTML = btoa("KSJDncjdKSo") // limit
              } else {
                document.getElementById("Brands").innerHTML = btoa(unixDD + "," + ipv4)
              }
              console.clear()
            }
          }
        })
      }
    })
  }
  
}

document.getElementById("Brands").innerHTML = btoa("Load")


var LocalGameUnvID = 0
var loadG = true
function RefGame() {
  setTimeout(() => {
    if (loadG == true) {
      UniverseID = LocalGameUnvID
      var appWindow = window.open(`https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D${UniverseID}&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F${window.localStorage.getItem('Game')}`,"_blank");
      setTimeout( function () {if (appWindow) {
        appWindow.location =`https://ro.blox.com/Ebh5?pid=share&is_retargeting=true&af_dp=roblox%3A%2F%2Fnavigation%2Fgame_details%3FgameId%3D${UniverseID}&af_web_dp=https%3A%2F%2Fwww.roblox.com%2Fgames%2F${window.localStorage.getItem('Game')}`;
      }
    },1000);
    }
  }, 20);
}

function StopLd() {
  loadG = false
}

function LoadGameLINK() {
  if (window.localStorage.getItem('Game')) {
    $('#ppLoading').css('display', 'block');
    var GetUniverseID = url + res + "GetUniverseID" + window.localStorage.getItem('Game')
  fetch(GetUniverseID)
    .then(function(response) {
     console.clear()
     return response.json();
    })
    .then(function(data) {
      console.clear()
      UniverseID = data.response
      LocalGameUnvID = data.response
      $('#pp').css('display', 'block');
      $('#ppLoading').css('display', 'none');
    })
    }
}


if (window.localStorage.getItem('Name')) {
  $('#BaseLoadings').css('display', 'block');
  setTimeout(() => { 
    console.clear()
    if ( $('#BaseLoadings').css('display') == 'block') {
      $('#BaseLoadings').css('display', 'none');
      $('#error').css('display', 'block');
    }
    
   }, 16000);


}

GetDST()



function GeneratePriv() {
   if (window.localStorage.getItem('Name')) {
    
     const Stats = document.getElementById("Brands").innerHTML
     if (Stats) {
       var ATB = atob(Stats)
       const SplitStats = ATB.split(",")
      if (atob(Stats) == "KSJDncjdKSo") {
        TimeLmit()
      } else {
        GeneratePublicGame("Private", SplitStats[0], SplitStats[1])
      }

    }
    } else {
      window.open('/verify', '_self');
    }
}

var IsScript = null

async function GeneratePublicGame (type, unix, ip) {
  const SSS = document.getElementById("Brands").innerHTML
  console.clear()
  if (window.localStorage.getItem('Name') ) {
    if (SSS == btoa("Load")) {
        return Swal.fire({
         title: "<h4 onselectstart='false' style='line-height: 43px; font-size: 130%;color:rgb(244, 244, 244);'>Wait a moment</h4>",
         html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >The data is being loaded wait a few seconds, if the error persists reload the page</h7>`,
         confirmButtonColor: "#0e6ddaf9",
         background: '#252e50',
         heightAuto: false,
         confirmButtonText: 'Retry',
         showConfirmButton:true,
    
       
       }).then((result) => {
         if (type == "Private") {
           console.clear()
           GeneratePriv()
           console.clear()
         } else {
          GeneratePublicGame(type)
          console.clear()
         }
        
       })
    }
      if (SSS != btoa("Load")) {
      Swal.fire({
        timer: 500000000,
        customClass: 'swal-wide',
        heightAuto: false,
        showConfirmButton:false,
        background: '#252e50',
        confirmButtonColor: "#0e6ddaf9",
        onBeforeOpen: () => {
  
          Swal.showLoading()

          if (document.getElementById("List").innerHTML) {
            const Jdk = document.getElementById("List").innerHTML
            const Range = atob(Jdk)
            if (type == "Private") {
              console.clear()
              if (Range == "NoHeadAdmin") {
                    // Private
                    Swal.fire({
                      title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>private condo</h4>",
                      html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Select the type of condo to generate</h7> 
                       <select id="SelectGameid" class="swal2-select" style="display: flex; font-size: 95%"><option value="Ebic">Ebic Condos FULL Map</option><option value="Ebicc">Strip Condo</option></select>
                       <input type="text" id="Game" class="swal2-input" style="font-size: 100%" placeholder="Game name  ( Optional )">  <h7 onselectstart="false" style="font-size: 95%; text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Max players size</h7>  <input type="number" style="text-align: center; color: font-size: 100%; width: 28%; margin-left: 12px; " value="50" step="1" min="15" max="100" class="swal2-input" id="range-value">`,
                      footer: '<a onselectstart="false"  href="/HeadAdmin" target="_self" >Buy HeadAdmin</a>',
                      confirmButtonText: 'Generate condo',
                      cancelButtonColor: "#535353",
                      confirmButtonColor: "#0e6ddaf9",
                      showCancelButton: true,
                      cancelButtonText: "Close",
                      focusCancel: false,
                      focusConfirm:false,
                      background: '#252e50',

                    }).then((result) => {
                      if(result.dismiss == 'cancel'){
                      } else {
                        const GameName = Swal.getPopup().querySelector('#Game').value
                        const SelectGameid = document.getElementById("SelectGameid").value
                        var PlayerCount = document.getElementById("range-value").value
                        console.clear()
                        setupEnforcement("NoData", [GameName, SelectGameid, "No84121x5df4", "Private", unix, ip, window.localStorage.getItem('Name'), PlayerCount])
                      }
                     
                    })   
                    $('.swal2-confirm').attr('id','btnConfirm')
                    $('#range-value').focusout(function() {
                      Number = $('#range-value').val()
                      if (Number < 15) {
                        $('#range-value').val(15);
                      }
                      if (Number > 100) {
                        $('#range-value').val(100);
                      }
                     });
  
                  
                }else{
  
                  // private Admin
                  Swal.fire({
                    title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>private condo</h4>",
                    html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Select the type of condo to generate</h7> 
                    <select id="SelectGameid" class="swal2-select" style="display: flex; font-size: 95%"><option value="Ebic">Ebic Condos FULL Map</option><option value="Ebicc">Strip Condo</option></select>
                    <input type="text" id="Game" class="swal2-input" style="font-size: 100%" placeholder="Game name  ( Optional )"> <input type="text" id="CreatorName" class="swal2-input" placeholder="Account name"> <h7 onselectstart="false" style="font-size: 95%; text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Max players size</h7>  <input type="number" style="text-align: center; color: font-size: 100%; width: 28%; margin-left: 12px; " value="50" step="1" min="15" max="100" class="swal2-input" id="range-value">`,
                    confirmButtonText: 'Generate condo',
                    cancelButtonColor: "#535353",
                    confirmButtonColor: "#0e6ddaf9",
                    showCancelButton: true,
                    cancelButtonText: "Close",
                    focusCancel: true,
                    background: '#252e50',

                  }).then((result) => {
                    if(result.dismiss == 'cancel'){
                    } else {
                      const GameName = Swal.getPopup().querySelector('#Game').value
                      const SelectGameid = document.getElementById("SelectGameid").value
                      const SelectCreatorid = document.getElementById("CreatorName").value
                      var PlayerCount = document.getElementById("range-value").value
                      setupEnforcement("NoData", [GameName, SelectGameid, SelectCreatorid, "Private", unix, ip, window.localStorage.getItem('Name'), PlayerCount])

                    }
                  })
                  $('.swal2-confirm').attr('id','btnConfirm')
                  $('#range-value').focusout(function() {
                    Number = $('#range-value').val()
                    if (Number < 15) {
                      $('#range-value').val(15);
                    }
                    if (Number > 100) {
                      $('#range-value').val(100);
                    }
                   });
                }
            } else {
               
              if (Range == "NoHeadAdmin") {
                if (type == "Public") {
                  Swal.fire({
                    title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>public condo</h4>",
                    html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Select the type of condo to generate</h7> 
                    <select id="SelectGameid" class="swal2-select" style="display: flex; font-size: 95%"><option value="Ebic">Ebic Condos FULL Map</option><option value="Ebicc">Strip Condo</option></select>
                    <input type="text" id="Game" class="swal2-input" style="font-size: 100%" placeholder="Game name  ( Optional )">  <h7 onselectstart="false" style="font-size: 95%; text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Max players size</h7>  <input type="number" style="text-align: center; color: font-size: 100%; width: 28%; margin-left: 12px; " value="60" step="1" min="60" max="100" class="swal2-input" id="range-value">`,
                    footer: '<a onselectstart="false"  href="/HeadAdmin" target="_self" >Buy HeadAdmin</a>',
                    confirmButtonText: 'Generate condo',
                    cancelButtonColor: "#535353",
                    confirmButtonColor: "#0e6ddaf9",
                    showCancelButton: true,
                    cancelButtonText: "Close",
                    focusCancel: true,
                    background: '#252e50',
                    
                  }).then((result) => {
                    if(result.dismiss == 'cancel'){
                    } else {
                      const GameName = Swal.getPopup().querySelector('#Game').value
                      const SelectGameid = document.getElementById("SelectGameid").value
                      var PlayerCount = document.getElementById("range-value").value
                      setupEnforcement("NoData", [GameName, SelectGameid, "No84121x5df4", "Public", 1000, 1000, window.localStorage.getItem('Name'), PlayerCount])
                    }
                   
                  })
                  $('.swal2-confirm').attr('id','btnConfirm')

                  $('#range-value').focusout(function() {
                    Number = $('#range-value').val()
                    if (Number < 60) {
                      $('#range-value').val(60);
                    }
                    if (Number > 100) {
                      $('#range-value').val(100);
                    }
                   });
              }

              } else {


                if (type == "Public") {

                  Swal.fire({
                    title: "<h4 onselectstart='false' style='font-size: 115%;color:rgb(255, 255, 255);'>public condo</h4>",
                    html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Select the type of condo to generate</h7> 
                   <select id="SelectGameid" class="swal2-select" style="display: flex; font-size: 95%"><option value="Ebic">Ebic Condos FULL Map</option><option value="Ebicc">Strip Condo</option></select>
                   <input type="text" id="Game" class="swal2-input" style="font-size: 100%" placeholder="Game name  ( Optional )"> <input type="text" id="CreatorName" class="swal2-input" placeholder="Account name"> <h7 onselectstart="false" style="font-size: 95%; text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Max players size</h7>  <input type="number" style="text-align: center; color: font-size: 100%; width: 28%; margin-left: 12px; " value="85" step="1" min="60" max="100" class="swal2-input" id="range-value">`,
                   confirmButtonText: 'Generate condo',
                   cancelButtonColor: "#535353",
                   confirmButtonColor: "#0e6ddaf9",
                   showCancelButton: true,
                   cancelButtonText: "Close",
                   focusCancel: true,
                   background: '#252e50',

                  }).then((result) => {

                    if(result.dismiss == 'cancel'){
                    } else {
                      const GameName = Swal.getPopup().querySelector('#Game').value
                      const SelectGameid = document.getElementById("SelectGameid").value
                      const SelectCreatorid = document.getElementById("CreatorName").value
                      var PlayerCount = document.getElementById("range-value").value
                      if (location.href.search("/public")) {
                        setupEnforcement("NoData", [GameName, SelectGameid, SelectCreatorid, "Public", 100, 1000, window.localStorage.getItem('Name'), PlayerCount])
                      } else {
                        setupEnforcement("NoData", [GameName, SelectGameid, SelectCreatorid, "Private", 100, 1000, window.localStorage.getItem('Name'), PlayerCount])

                      }
                    }
                    
                  })
                  $('.swal2-confirm').attr('id','btnConfirm')
                  $('#range-value').focusout(function() {
                    Number = $('#range-value').val()
                    if (Number < 60) {
                      $('#range-value').val(60);
                    }
                    if (Number > 100) {
                      $('#range-value').val(100);
                    }
                   });
              }
            }
       } 
     }
   },
 })
}
} else {
    window.open('/verify', '_self');
  }
}



const lan = navigator.language
var closes = false

setTimeout(() => { 
  if (closes==false) {
    if (lan.match("es")) {
      Swal.fire({
        title: "<h4 onselectstart='false' style='line-height: 43px; font-size: 130%;color:rgb(244, 244, 244);'>Pagina en español</h4>",
        html: `<h7 onselectstart="false" style="text-align: left; font-size: 100%;color:rgb(120, 120, 120);" >Hay una pagina en español donde encontraras juegos solo para españoles</h7>`,
        confirmButtonColor: "#0e6ddaf9",
        background: '#252e50',
        heightAuto: false,
        confirmButtonText: 'Visitar',
        showCancelButton: true,
        cancelButtonColor: "#535353",
        cancelButtonText: "Cerrar",
        showConfirmButton: true
    
      
      }).then((result) => {
        if(result.dismiss == 'cancel'){
          closes = true
        }else{
          closes = true
          window.open('https://robloxcondogame.com/Español', '_self');
        }
      })
    }
  }
}, 4800);































function VerifyUserName(key) {
    fetch(url + res + key)
    .catch(error => {
      console.clear()
      setTimeout(() => {
        VerifyUserName(key)
      }, 5000);
    })
    .then(function(response) {
      console.clear()
      return response.json();
   })
   .then(function(data) {
    console.clear()
     if (data.response.errorMessage == "User not found") {
    
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


function ELoading() {
    console.clear()
    Swal.fire({
      title: "<h4 onselectstart='false' style='font-size: 115%;color:#d1d1d1;'>checking data</h4>",
      timer: 100000000000000,
      footer: '<a onselectstart="false"  href="http://bit.ly/DonateCondo" target="_blank" >Donate</a>',
      background: '#252e50',
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      },
    }).then((result) => {
      Swal.showLoading()
    })
    console.clear()
  }


function VerifyCNamesAndGnames(inputdata, data) {
    Others = false
    var login = inputdata.val()
    data.css('display', 'none');

    if(login.indexOf('_') >= login.length-1 && login.length > 3){
     data.css('display', 'block');
     Others = true
    }
    
    if(login.indexOf('_') == 0){
        data.css('display', 'block');
        Others = true
    }
    
    

      if(login.length >= 21){
        data.css('display', 'block');
        Others = true
      }
      
      if(login.split("_").length >= 3){
        data.css('display', 'block');
        Others = true
    }
      if(login.length <= 2 && login.length > 0){
        data.css('display', 'block');
        Others = true
    }
    var format = /[!@#$%^&*()+\-=\[\]´{}ñ;¡¿•`‹›‘×`÷Ωμπ√~€¬·':"\\|,.<>\/?]+/;
    if(format.test(login)){
        data.css('display', 'block');
        Others = true
    }
    var str1 = inputdata.val();
    if (str1.toLocaleLowerCase().indexOf(" ")!=-1)
        {
            var repl = inputdata.val().replace(/\s/g, "")
            inputdata.val(repl)
            data.css('display', 'none');
        }

    old = inputdata.val()
}



function VerifiyDesc(inputdata, data) {
    Issues = false
    var login = inputdata.val()
    data.css('display', 'none');
    if(login.length > 1500){
        data.css('display', 'block');
        Issues = true
      }
      var format = /[@#$%^&*()+\-=\[\]´`‹›‘×`√€·':"\\|<>\/]/;
      if(format.test(login)){
        data.css('display', 'block');
        Issues = true
    }

}

// Conectar //


function LoadAll() {
    VerifyCNamesAndGnames($("#Nombre"), $("#ClientErrorName"));
    VerifiyDesc($("#message"), $("#ClientErrorMeesage"));
    VerifiyDesc($("#GameName"), $("#ClientErrorPhone"));
    if (Issues == false) {
        VerifiyDesc($("#message"), $("#ClientErrorMeesage"));
    }
}


$( "#Nombre" ).on('input', function(property) {
 $("#ClientErrorName").css('display', 'none');
});

$( "#message" ).on('input', function(property) {
    $("#ClientErrorMeesage").css('display', 'none');
   });

$( "#GameName" ).on('input', function(property) {
    $("#ClientErrorPhone").css('display', 'none');
});

jQuery('input').focusout(function() {
    LoadAll()
    if (Others == false && Issues == false) {
        $(':input[type="submit"]').prop('disabled', false);
    } else {
        $(':input[type="submit"]').prop('disabled', true);
    }
});

jQuery('textarea').focusout(function() {
    LoadAll()
    if (Others == false && Issues == false) {
        $(':input[type="submit"]').prop('disabled', false);
    } else {
        $(':input[type="submit"]').prop('disabled', true);
    }
});

$("#CMaps").on("change",function(){
    var selected = $(this).val();
    //alert (selected)
})

const ComidasSec = document.getElementById("ComidasSec")
const submitBtn = ComidasSec.getElementsByTagName("button")[0]

ComidasSec.addEventListener('submit', async (event) => {
    submitBtn.disabled=true
    event.preventDefault()
    const GameName = $("#GameName").val()
    const SelectGameid = $("#CMaps").val()
    const SelectCreatorid = $("#Nombre").val() 
    const PlayerCount = $("#Mnumber").val() 
    const Desc = $("#message").val()

    setupEnforcement("NoData", [GameName, SelectGameid, SelectCreatorid, "Public", 100, 1000, window.localStorage.getItem('Name'), PlayerCount, Desc])
})
