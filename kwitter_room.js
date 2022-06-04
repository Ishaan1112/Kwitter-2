
function adduser() {
     
username = document.getElementById("user_name").value;

localStorage.setItem("username" , username);

      window.location = "Kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      ".read": "now < 1656734400000",  // 2022-7-2
    ".write": "now < 1656734400000",  // 2022-7-2
      //End code
      });});}
getData();
