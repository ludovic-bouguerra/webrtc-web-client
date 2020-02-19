document.addEventListener('DOMContentLoaded', function () {
  const cmdRecord = document.getElementById("cmdRecord");
  const cmdScene1 = document.getElementById("cmdScene1")
  const cmdScene2 = document.getElementById("cmdScene2")
  const cmdScene3 = document.getElementById("cmdScene3")

  const websocket = new WebSocket("ws://localhost:8000/");
   websocket.onopen = function(){

   };
   websocket.onerror = function(error){
       alert("Impossible de se connecter au websocket");
   };
   
   cmdRecord.onclick = function(){
    websocket.send("record");
   }

   cmdScene1.onclick = function(){
    websocket.send("scene_1");
   }
 
   cmdScene2.onclick = function(){
    websocket.send("scene_2");
   }   

   cmdScene3.onclick = function(){
    websocket.send("scene_3");
   }      
});