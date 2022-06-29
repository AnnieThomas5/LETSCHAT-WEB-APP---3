
const firebaseConfig = {
    apiKey: "AIzaSyCBY9FsCR26BkSls5TVjeFyQTYsI7ChJrI",
    authDomain: "kwitter-cdf8a.firebaseapp.com",
    databaseURL: "https://kwitter-cdf8a-default-rtdb.firebaseio.com",
    projectId: "kwitter-cdf8a",
    storageBucket: "kwitter-cdf8a.appspot.com",
    messagingSenderId: "508775606689",
    appId: "1:508775606689:web:467382c9cee92fefaa43e0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

function addroom()
{
     room_name = document.getElementById("room_name").value;


     firebase.database().ref("/").child(room_name).update({
           purpose : "adding room name"
     });

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("Room Name -"+ room_name);
row = '<div class='room_name' id="+room_names+" onclick='redirectoRoomName(this.id)' >#"+ room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeIteam("user_name");
    localStorage.removeIteam("room_nmae");
    window.location = "kwitter.html";
    
    ;
                                                                   
}

