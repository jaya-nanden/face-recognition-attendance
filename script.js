const roll_no = document.getElementById("roll_no");
var saveButton = document.getElementById("saveButton");


var modal = document.getElementById("myModal");
var attendOnlineButton = document.getElementById("attend-online");
var span = document.getElementsByClassName("close")[0];
var loader = document.getElementById("loader");

const player = document.getElementById('player');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const captureButton = document.getElementById('capture');
const tryAgainButton = document.getElementById('try-again');
const predictButton = document.getElementById('predict');

// When the user clicks on the button, open the modal
attendOnlineButton.onclick = function() {
    modal.style.display = "block";
    console.log(roll_no.value)
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    player.srcObject.getVideoTracks().forEach(track => track.stop());
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        player.srcObject.getVideoTracks().forEach(track => track.stop());
        context.clearRect(0, 0, canvas.width, canvas.height);
        loader.style.visibility = "hidden";
    }
    // loader.style.visibility = "hidden";
}

// Video Mode ON
const constraints = {
    video: true,
};


attendOnlineButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
    player.srcObject = stream;
    });
});

// Capture and Draw the image in Canvas
captureButton.addEventListener('click', () => {
    context.drawImage(player, 0, 0, canvas.width, canvas.height);
    player.srcObject.getVideoTracks().forEach(track => track.stop());
});


// Recapture 
tryAgainButton.addEventListener('click', () => {
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
    player.srcObject = stream;
    });
});

// Face Recognition 
predictButton.addEventListener('click', () => {

    // Base64 String of captured image
    var i = document.getElementById("canvas").toDataURL();
    // console.log(i.toString());
    loader.style.visibility = "visible";
    // https://face-authen-api.herokuapp.com/predict
    // http://127.0.0.1:5000/predict
    fetch('https://face-authen-api.herokuapp.com/predict', {
        method: 'POST',
        body: JSON.stringify({
            rollno: roll_no.value,
            imgbase64: i
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        loader.style.visibility = "hidden";
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        loader.style.visibility = "hidden";
        if(data['match_status'] == "Yes") {
            window.alert(data['match_status'] + ", Login Successful... (Opening Teams)");
        } else {
            window.alert(data['match_status'] + ", Try Again... (Make Sure Your Face is Captured ;p)");
        }
        console.log(data);
    }).catch(function (error) {
        loader.style.visibility = "hidden";
        console.warn('Something went wrong...', error);
    });
    
});



