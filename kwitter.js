function adduser(){
 username=document.getElementById("inputbox").value 
 localStorage.setItem("username",username)
 window.location="kwitter_room.html"  
}