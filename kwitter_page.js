var firebaseConfig = {
    apiKey: "AIzaSyDzVZvkmi04yRL6wWD6G1NUFYpuuupc-Ok",
    authDomain: "project101-8d868.firebaseapp.com",
    databaseURL: "https://project101-8d868-default-rtdb.firebaseio.com",
    projectId: "project101-8d868",
    storageBucket: "project101-8d868.appspot.com",
    messagingSenderId: "743891776032",
    appId: "1:743891776032:web:94150d59fba9f98d460245",
    measurementId: "G-KP826NRBTG"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
logout(); 
{
window.location = "index.html"
}

send(); {
message = document.getElementById("message")
document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
    });

    document.getElementById("msg").value = "";
 }



user_name = localStorage.getItem("user_name")
room_name = localStorage.getItem("room_name")