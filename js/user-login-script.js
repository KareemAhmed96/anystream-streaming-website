// Asynchronous  Function Login Validates the User Name and Password
    // Valid login will return Token which we will store at the Locale Storage 
//  The Used Login Function 
///////// Uses Async and Await ot get The Response /////////
//*
async function login() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

  //  var raw = JSON.stringify({ "username": "kareemdb5", "password": "1234" });
  // results from the Request >> Error Unauthorized ==== {error: "username or password not correct"}
  ////////// >>>>> Everything is ok ========{success: "logined successfully", data: {…}, token: "6436947d-83de-4b9b-9323-bad2f217e122"} user-login-script.js:24 6436947d-83de-4b9b-9323-bad2f217e122
    var raw ='{"username":"kareemdb5","password":"1234"}'
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

   let response = await fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/login", requestOptions);
   let responseJsonObj= await response.json()
 //  console.log(response)
   console.log(responseJsonObj)
 //  console.log(responseJsonObj.token)
   window.localStorage.setItem("Token",responseJsonObj.token)
}


///////////////////////////////////////////////// Implementation for the Log out Function ////////////////
//*/ to Be  Used Logout Function ////////////////////////////
async function logout(){
    var myHeaders=new  Headers()
    myHeaders.append("Content-Type","application/json");
    let token=localStorage.getItem("Token")
    myHeaders.append("token",token)

    var requestOptions={
        method:'GET',
        headers:myHeaders,
        redirect:'follow'
    }
    response=await  fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/logout",requestOptions)
    responseObj = await response.json()
    console.log(responseObj)
    remove()
}


//*/
///////////////////////////////////////////////
 
//////////////Remove is temporarily used to test removing token form local storage ///////////////////////
function remove(){
    localStorage.removeItem("Token")
}


/////////////////////////////////////////////////// Test All APIS /////////////////////////////////////////////////



//////// Register >> must Take Headers as to know the content Type ///////////// >>>> Body willl be of a string object ////////////////////////


///* Register Test
function register(){
    var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
          var raw ='{"username":"ahmed","password":"123"}';
        
         var requestOptions = {
          method: 'POST',
          body: raw,
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/register", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
         .catch(error => console.log('error', error));
}
//*/

//////////////////////////////////////////// Login /////////////////////////////////////////////
//////// >>>>  The Same As Register ///////////// Must Include Headers //////////////////////// 
/*Login Test


function login(){
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    var raw ='{"username":"ahmed","password":"123"}';
        
        var requestOptions = {
          method: 'POST',
          body: raw,
          headers: myHeaders,
          redirect: 'follow'
        };
        
        fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/login", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
         .catch(error => console.log('error', error));
}
*/

 // lOGOUT TEST
////////////////
/*function logout(){
    var myHeaders = new Headers();
    let token=localStorage.getItem("Token")

    console.log(typeof(token),token)
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("token",token );

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/logout", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
*/

///////////////////////////////////// Management APIS ////////////////////////////////

//////////////////////// ADD /////////////////////////
function add(){
        var myHeaders = new Headers();
        var raw ={"Vediotitle":"Video4","Description":"My Vedieo4","URL":"http/eample/hdh.mp4","id":8 };
        console.log(typeof(raw))
        raw=JSON.stringify(raw)
        console.log(typeof(raw))
        myHeaders.append("Content-Type", "application/json");
        let token=localStorage.getItem("Token")
        myHeaders.append("token", token);
        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/sawy_vedios/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
//// Get One
function getOne(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let token=localStorage.getItem("Token")
    myHeaders.append("token", token);
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/sawy_vedios/1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
/// Get All
function getAll(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let token=localStorage.getItem("Token")
    myHeaders.append("token", token);
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/sawy_vedios/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
// Update
function edit(){
    var myHeaders = new Headers();
    var raw='{"Vediotitle":"Video4_Update","Description":"My Vedieo4_Update","URL":"http/eample/hdh.mp4"}';
    myHeaders.append("Content-Type", "application/json");
    let token=localStorage.getItem("Token")
    myHeaders.append("token", token);
    var requestOptions = {
    method: 'POST',
    body: raw,
    headers: myHeaders,
    redirect: 'follow'
    };

    fetch(`https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/sawy_vedios/11`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
//// Delete
function deleteItem(){
  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "application/json");
  let token=localStorage.getItem("Token")
  myHeaders.append("token", token);
  var requestOptions = {
  method: 'DELETE',

  headers: myHeaders,
  redirect: 'follow'
  };

  fetch("https://desolate-ocean-66919.herokuapp.com/http://anyservice.imassoft.com/5/sawy_vedios/6", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}

