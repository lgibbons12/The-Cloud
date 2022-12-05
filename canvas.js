//html5 canvas tutorial for beginners ep 4 10:54
//linkto: https://www.youtube.com/watch?v=yq2au9EfeRQ


//get the canvas from DOM
var canvas = document.querySelector("canvas");

//make the canvas take up the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//a bunch of methods stored in the variable
var c = canvas.getContext('2d');



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
var mouse = {
    x: undefined,
    y: undefined
}
window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})
class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function () {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "gray";
            c.stroke();
            c.fillStyle = "gray";
            c.fill();
        };
        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx *= -1;
            }
            if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
                this.dy *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;

            //interactivity
            if (mouse.x - this.x < 25 && mouse.x - this.x > - 25 && 
                mouse.y - this.y < 25 && mouse.y - this.y > -25 ) {
                this.radius += 1;
            }
            
            else if (this.radius > 2){
                this.radius -= 1;
            }
        };
    }
}

var circleArray = [];
for (var i = 0; i < 100; i++) {
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = 0;
    var dy = dx = (Math.random() -0.5) * 8;
    var radius = 30;
    circleArray.push(new Circle(x, y, dx, dy, radius))
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "rgb(137, 196, 244)";
    c.fillRect(0, 0, innerWidth, innerHeight); 

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].draw();
        circleArray[i].update();
    }
    
    
}

animate();
