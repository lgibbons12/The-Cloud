//get the canvas from DOM
var canvas = document.querySelector("canvas");

//make the canvas take up the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//a bunch of methods stored in the variable
var c = canvas.getContext('2d');

c.fillStyle = "rgb(255, 230, 0)";
c.fillRect(100, 100, 100, 50);

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.strokeStyle = "blue";
c.stroke();


// Arc (new begin path)
//c.beginPath();
//c.arc(300, 300, 30, 0, Math.PI * 2, false);
//c.stroke();

for (i = 0; i < 10; i++) {
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
}