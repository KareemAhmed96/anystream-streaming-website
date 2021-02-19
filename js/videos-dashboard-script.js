           var vid, playbtn, seekslider, curtimetext, durtimetext, mutebtn, volumeslider;
function intializePlayer(){
  // Set object references
  vid = document.getElementById("my_video");
  playbtn = document.getElementById("playpausebtn");
  seekslider = document.getElementById("seekslider");
  curtimetext = document.getElementById("curtimetext");
  durtimetext = document.getElementById("durtimetext");
  mutebtn = document.getElementById("mutebtn");
  volumeslider = document.getElementById("volumeslider");
  // Add event listeners
  playbtn.addEventListener("click",playPause,false);
  seekslider.addEventListener("change",vidSeek,false);
  vid.addEventListener("timeupdate",seektimeupdate,false);
  mutebtn.addEventListener("click",vidmute,false);
  volumeslider.addEventListener("change",setvolume,false);
}
window.onload = intializePlayer;
function playPause(){
  if(vid.paused){
    vid.play();
    playbtn.innerHTML = "Pause";
  } else {
    vid.pause();
    playbtn.innerHTML = "Play";
  }
}
function vidSeek(){
  var seekto = vid.duration * (seekslider.value / 100);
  vid.currentTime = seekto;
}
function seektimeupdate(){
  var nt = vid.currentTime * (100 / vid.duration);
  seekslider.value = nt;
  var curmins = Math.floor(vid.currentTime / 60);
  var cursecs = Math.floor(vid.currentTime - curmins * 60);
  var durmins = Math.floor(vid.duration / 60);
  var dursecs = Math.floor(vid.duration - durmins * 60);
  if(cursecs < 10){ cursecs = "0"+cursecs; }
  if(dursecs < 10){ dursecs = "0"+dursecs; }
  if(curmins < 10){ curmins = "0"+curmins; }
  if(durmins < 10){ durmins = "0"+durmins; }
  curtimetext.innerHTML = curmins+":"+cursecs;
  durtimetext.innerHTML = durmins+":"+dursecs;
}
function vidmute(){
  if(vid.muted){
    vid.muted = false;
    mutebtn.innerHTML = "Mute";
  } else {
    vid.muted = true;
    mutebtn.innerHTML = "Unmute";
  }
}
function setvolume(){
  vid.volume = volumeslider.value / 100;
}
 async function login() {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var raw = JSON.stringify({ "username": "kareemdb5", "password": "1234" });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            let response = await fetch("https://nameless-dusk-81295.herokuapp.com/http://anyservice.imassoft.com/5/login", requestOptions);
            let responseJsonObj = await response.json()
             console.log(responseJsonObj.token)
             return responseJsonObj.token
        }


async function getmovies() {

  let dynamic_token =await login()
  console.log("token inside in get movies",dynamic_token) 
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token",dynamic_token );


    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    let moivesCount = 3;
    let urlArray = []

    for(let moivesId=0 ; moivesId<moivesCount ; moivesId++) {
        let url=`https://nameless-dusk-81295.herokuapp.com/http://anyservice.imassoft.com/5/videos-with-imgs/${moivesId}`
        let httpResponse = await fetch(url,requestOptions);
        

        responseJsonObj = await httpResponse.json();  
        console.log(responseJsonObj) 
  
        urlArray.push(responseJsonObj.data.img_url)
        window.localStorage.setItem("moives-url-array", urlArray) 
window.localStorage.setItem("video_url",responseJsonObj.data.url )
    }
}

 


getmovies();

let localStorageUrlArray = window.localStorage.getItem("moives-url-array")
let localStorageUrl = window.localStorage.getItem("video_url")

localStorageUrlArray = localStorageUrlArray.split(",")
console.log(localStorageUrlArray[0])
console.log(localStorageUrlArray[1])
console.log(localStorageUrlArray[2])

document.getElementById("my_video").setAttribute("src",localStorageUrl)

document.getElementById("movie_1").setAttribute("src", localStorageUrlArray[0])
document.getElementById("movie_2").setAttribute("src", localStorageUrlArray[1])
document.getElementById("movie_3").setAttribute("src", localStorageUrlArray[2])




