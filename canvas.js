//html5 canvas tutorial for beginners ep 3 15:20
//linkto: https://www.youtube.com/watch?v=yq2au9EfeRQ


//get the canvas from DOM
var canvas = document.querySelector("canvas");

//make the canvas take up the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//a bunch of methods stored in the variable
var c = canvas.getContext('2d');

/* c.fillStyle = "rgb(255, 230, 0)";
c.fillRect(100, 100, 100, 50); */

// Line
/* c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "blue";
c.stroke(); */


// Arc (new begin path)
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.stroke();

/* for (i = 0; i < 10; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var a = Math.random() * 3;
    console.log(a);
    c.strokeStyle = "gray";
    if (a < 1) {
        c.strokeStyle = "green";
    }
    else if (a > 1 && a < 2) {
        c.strokeStyle = "blue";
    }
    else {
        c.strokeStyle = "red";
    }
    
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();
} */

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var dx = (Math.random() - 0.5) * 5;
var dy = (Math.random() - 0.5) * 5;
var radius = 30;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
    
    if (x + radius > innerWidth || x - radius < 0) {
        dx *= -1;
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy *= -1;
    }
    x += dx;
    y += dy;
}

animate();