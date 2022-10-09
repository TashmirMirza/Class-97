var firebaseConfig = {
      apiKey: "AIzaSyDJp1IkMOSxd1r72HFL2eJf4bI4JNBAab0",
      authDomain: "kwitter-13d15.firebaseapp.com",
      databaseURL: "https://kwitter-13d15-default-rtdb.firebaseio.com",
      projectId: "kwitter-13d15",
      storageBucket: "kwitter-13d15.appspot.com",
      messagingSenderId: "304786431619",
      appId: "1:304786431619:web:800d3e68258dd842eb45b6",
      measurementId: "G-N11BSZK60R"
};
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username")
function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });   
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         name=message_data['name'];
         message=message_data['message'];
         like=message_data['like'];
         name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
         message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
         like_with_tag="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
         span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
         row=name_with_tag+message_with_tag+like_with_tag+span_with_tag; 
         document.getElementById("output").inerHTML+=row;
      } });  }); }
getData();
function updatelike(){
buttonid=message_id ;
likes=document.getElementById(buttonid).value;
updatedlikes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({like:updatedlikes});
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("Room_name");
      window.location="kwitter.html";
}