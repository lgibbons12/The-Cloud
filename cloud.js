//get the canvas from DOM
var canvas = document.querySelector("canvas");

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


        this.draw = function() {
            drawClouds(this.x - (this.size * .8), this.y, this.size);
            drawClouds(this.x + (this.size * 1.5), this.y, this.size * 2);
            drawClouds(this.x + (this.size * 3.5), this.y, this.size * 1.5);
            
            
        }
        this.update = function () {
            if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
                this.dx *= -1;
            }
            
            this.x += this.dx;
        }
    }
}
var hello = new Cloud(innerWidth/2, innerHeight/5, -2, 40);

var fontBase = 1000,                   
    fontSize = 70;                    

function getFont() {
    var ratio = fontSize / fontBase;   
    var size = canvas.width * ratio;  
    return (size|0) + 'px sans-serif'; 
}
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "rgb(137, 196, 244)";
    c.fillRect(0, 0, innerWidth, innerHeight); 
    c.font = getFont()
    c.fillStyle = "black"
    c.fillText("The Cloud", innerWidth/2 - (innerwidth), innerHeight/2)
    hello.draw();
    hello.update();

    
    
    
}

animate();
