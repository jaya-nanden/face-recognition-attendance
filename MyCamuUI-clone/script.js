 // Get the modal
 var modal = document.getElementById("myModal");

 // Get the button that opens the modal
 var attendOnlineButton = document.getElementById("attend-online");

 // Get the <span> element that closes the modal
 var span = document.getElementsByClassName("close")[0];
 
 // var imgCanvas = document.getElementById('myCanvas');
 const player = document.getElementById('player');
 const canvas = document.getElementById('canvas');
 const context = canvas.getContext('2d');
 const captureButton = document.getElementById('capture');
 const tryAgainButton = document.getElementById('try-again');
 const predictButton = document.getElementById('predict');
 
 // When the user clicks on the button, open the modal
 attendOnlineButton.onclick = function() {
     modal.style.display = "block";
 }

 // When the user clicks on <span> (x), close the modal
 span.onclick = function() {
     modal.style.display = "none";
     player.srcObject.getVideoTracks().forEach(track => track.stop());

 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
     player.srcObject.getVideoTracks().forEach(track => track.stop());
 }

 const constraints = {
     video: true,
 };
 
 attendOnlineButton.addEventListener('click', () => {
     navigator.mediaDevices.getUserMedia(constraints)
     .then((stream) => {
       player.srcObject = stream;
     });
 });
 
 captureButton.addEventListener('click', () => {
     // Draw the video frame to the canvas.
     context.drawImage(player, 0, 0, canvas.width, canvas.height);
     player.srcObject.getVideoTracks().forEach(track => track.stop());
 });

 tryAgainButton.addEventListener('click', () => {
     navigator.mediaDevices.getUserMedia(constraints)
     .then((stream) => {
       player.srcObject = stream;
  });
 });

 predictButton.addEventListener('click', () => {
     var download = document.getElementById("download");
     var image = document.getElementById("canvas").toDataURL("image/png")
                     .replace("image/jpg", "image/octet-stream");
     download.setAttribute("href", image);
     // download.setAttribute("download","archive.png");
 });