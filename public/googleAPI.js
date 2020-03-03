function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.


  let welcome = document.getElementById('welcome');
  welcome.innerHTML = '<p id="saludo">Bienvenido '+profile.getName()+"</p>";

  let username = document.getElementById('username');
  username.setAttribute("value", profile.getName());
  //username.removeAttribute();

}

function signOut() {

  var saludo = document.getElementById("saludo");
  saludo.parentNode.removeChild(saludo);  //<---- muy buen código

  let username = document.getElementById('username');
  username.removeAttribute("value");

  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
  });
}



//<a id="out" class="btn btn-primary d-block" href="#" onclick="signOut();">Salir de Google</a>
