//get the canvas from DOM
var canvas = document.querySelector("canvas");

<<<<<<< HEAD
//state of website
var webState = 2;

=======
>>>>>>> 941b4267ee07916b2aa15c7685ab5450dc9daa18
//make the canvas take up the whole screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//a bunch of methods stored in the variable
var c = canvas.getContext('2d');


drawClouds = function(x, y, size) {
    c.beginPath();
    c.arc(x, y, size, 0, Math.PI, true);
    c.strokeStyle = "white";
    c.stroke();
    c.fillStyle = "white";
    c.fill();
}
class Cloud {
    constructor(x, y, dx, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.size = size;
<<<<<<< HEAD
        this.offScreen = false;
=======
>>>>>>> 941b4267ee07916b2aa15c7685ab5450dc9daa18


        this.draw = function() {
            drawClouds(this.x - (this.size * .8), this.y, this.size);
            drawClouds(this.x + (this.size * 1.5), this.y, this.size * 2);
            drawClouds(this.x + (this.size * 3.5), this.y, this.size * 1.5);
            
            
        }
        this.update = function () {
<<<<<<< HEAD
            if (this.x < 0 || this.x > innerWidth) {
                this.offScreen = true;
=======
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx *= -1;
>>>>>>> 941b4267ee07916b2aa15c7685ab5450dc9daa18
            }
            
            this.x += this.dx;
        }
    }
}
<<<<<<< HEAD
var cloudArray = [ 
    new Cloud(innerWidth/1.9, innerHeight/5 + 2, 2, 40),
    new Cloud(innerWidth/2.1, innerHeight/5 + 2, -2, 40)
];

var mainCloud = new Cloud(innerWidth/3, innerHeight/4, 0, 80);

var mouse = {
    x: undefined,
    y: undefined,
    click: undefined
}
window.addEventListener("mousemove", function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener("click", function(event) {
    mouse.click = true;
    mouse.x = event.x;
    mouse.y = event.y;
})

function animate() {
    //normal animation resets
=======
var hello = new Cloud(innerWidth/2, innerHeight/5, -2, 40);

var fontBase = 1000,                   
    fontSize = 70;                    

function getFont() {
    var ratio = fontSize / fontBase;   
    var size = canvas.width * ratio;  
    return (size|0) + 'px sans-serif'; 
}
function animate() {
>>>>>>> 941b4267ee07916b2aa15c7685ab5450dc9daa18
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "rgb(137, 196, 244)";
    c.fillRect(0, 0, innerWidth, innerHeight); 
<<<<<<< HEAD
    //opening animation
    if (webState === 0) {
        c.font = "70px Arial";
        c.fillStyle = "black"
        c.fillText("The Cloud", innerWidth/2 - (innerWidth/5), innerHeight/5);
        for (let i = 0; i < cloudArray.length; i++) {
            cloudArray[i].draw();
            cloudArray[i].update();
        }

        let counter = 0;
        for (let i = 0; i < cloudArray.length; i++) {
            if (cloudArray[i].offScreen === true) {
                counter++;
            }
        }
        if (counter === cloudArray.length) {
            webState = 1;
        }
    }
    else if (webState === 1) {
        c.fillStyle = "white";
        c.fillText("Enter the Cloud", innerWidth/2 - (innerWidth/4), innerHeight/3);
        if (mouse.click) {
            if (mouse.x > (innerWidth/2 - (innerWidth/4)) && mouse.x < ((innerWidth/2 - (innerWidth/4)) + innerWidth/2 + 10)) {
                if (mouse.y > innerHeight/4 && mouse.y < (innerHeight/4) + innerHeight/4) {
                    webState = 2;
                }
            }
        }
    }
    else if (webState === 2) {

        //lightning
        c.beginPath();
        c.lineWidth = 20;
        c.moveTo(innerWidth/4, innerHeight/4.2);
        c.lineTo(innerWidth / 3, innerHeight/3);
        c.lineTo(innerWidth/3.9, innerHeight/3.2);
        c.lineTo(innerWidth/2.8, innerHeight/2.2);
        c.stroke();

        //main cloud
        c.strokeStyle = "white";
        c.lineWidth = 1;
        mainCloud.draw();
        c.fillStyle = "yellow";
        c.strokeStyle = "yellow";
        c.fillStyle = "black";
        c.font = "15px Garamond";
        c.fillText("Deployment Methods", innerWidth/4.7, innerHeight/4.5);
        c.fillText("Services", innerWidth/1.6, innerHeight/4.5);
        c.font = "30px Garamond";
        c.fillText("How It Works", innerWidth/2.7, innerHeight/5.5);
        c.rotate(-60);
        c.font = "15px Garamond";
        c.fillText("Major Use Cases", innerWidth, innerHeight/4.5);
        c.rotate(60);

        
        

    }

    
=======
    c.font = getFont()
    c.fillStyle = "black"
    c.fillText("The Cloud", innerWidth/2 - (innerwidth), innerHeight/2)
    hello.draw();
    hello.update();
>>>>>>> 941b4267ee07916b2aa15c7685ab5450dc9daa18

    
    
    
}

<<<<<<< HEAD
animate();
=======
animate();
>>>>>>> 941b4267ee07916b2aa15c7685ab5450dc9daa18
