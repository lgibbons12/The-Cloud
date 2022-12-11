//get the canvas from DOM
var canvas = document.querySelector("canvas");

//state of website
var webState = 0;
let lineArray = [];
let rectArray = [];
let textArray = [];

let coolx = 0;
let cooly= 0;
let coolh = 0;
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
        this.offScreen = false;


        this.draw = function() {
            drawClouds(this.x - (this.size * .8), this.y, this.size);
            drawClouds(this.x + (this.size * 1.5), this.y, this.size * 2);
            drawClouds(this.x + (this.size * 3.5), this.y, this.size * 1.5);
            
            
        }
        this.update = function () {
            if (this.x < 0 || this.x > innerWidth) {
                this.offScreen = true;
            }
            
            this.x += this.dx;
        }
    }
}
var cloudArray = [ 
    new Cloud(innerWidth/1.9, innerHeight/5 + 2, 2 * (innerWidth/800), innerWidth/60),
    new Cloud(innerWidth/2.1, innerHeight/5 + 2, -2 * (innerWidth/800), innerWidth/60)
];

var mainCloud = new Cloud(innerWidth/2 - (innerWidth/10), innerHeight/4, 0, innerWidth/20);

var mouse = {
    x: undefined,
    y: undefined,
    click: undefined
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
            c.strokeStyle = "white";
            c.stroke();
            c.fillStyle = "white";
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


class Raindrop {
    constructor(x, y, dy, radius){
        this.x = x;
        this.y = y;
        this.savedy = y;
        this.dy = dy;
        this.radius = radius;

        this.draw = function() {
            c.beginPath();
            c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            c.strokeStyle = "blue";
            c.stroke();
            c.fillStyle = "blue";
            c.fill();

            
        }
        this.draw2 = function() {
            c.beginPath();
            c.moveTo(this.x - this.radius, this.y);
            c.lineTo(this.x, this.y - (this.radius * 2));
            c.lineTo(this.x + this.radius, this.y);
            c.stroke();
            c.fill();
            
        }
        this.update = function() {
            this.y += this.dy;
            if (this.y > innerHeight) {
                this.y = innerHeight/3.5;
            }
        }
    }
}

window.addEventListener("click", function(event) {
    mouse.click = true;
    mouse.x = event.x;
    mouse.y = event.y;
})
rainyArray = [];
for (i = 0; i <5; i++) {
    rainyArray.push(new Raindrop(innerWidth/2 + (innerWidth /12) + i*20, innerHeight / 4.5 * i, 5, innerWidth / 80))
}
rainy = new Raindrop(innerWidth/2 + (innerWidth /4), innerHeight / 5, 5, innerWidth / 80)


function drawLine(orgx, orgy, x, y) {
    c.beginPath();
    c.moveTo(orgx, orgy);
    c.lineTo(x, y);
    c.strokeStyle = "white";
    c.stroke();
}
let timer = 5;
//whole animation function
function animate() {
    timer--;
    if (timer < 0) {
        mouse.click = false;
        timer = 5;
    }
    
    //normal animation resets
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.fillStyle = "rgb(137, 196, 244)";
    c.fillRect(0, 0, innerWidth, innerHeight); 
    //opening animation
    if (webState === 0) {
        c.font = "70px Arial";
        if (innerWidth < 1000) {
            c.font = "50px Arial";
        }
        c.fillStyle = "black"
        c.fillText("The Cloud", innerWidth/2 - (innerWidth/11), innerHeight/5);
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
        
        if (mouse.x > (innerWidth/2 - (innerWidth/4)) && mouse.x < ((innerWidth/2 - (innerWidth/4)) + innerWidth/2 + 10)) {
            if (mouse.y > innerHeight/4 && mouse.y < (innerHeight/4) + innerHeight/4) {
                c.fillStyle = "blue";
            }
        }
        c.fillText("Enter the Cloud", innerWidth/2 - (innerWidth/8), innerHeight/3);
        if (mouse.click) {
            if (mouse.x > (innerWidth/2 - (innerWidth/4)) && mouse.x < ((innerWidth/2 - (innerWidth/4)) + innerWidth/2 + 10)) {
                if (mouse.y > innerHeight/4 && mouse.y < (innerHeight/4) + innerHeight/4) {
                    webState = 2;
                }
            }
        }
        for (var i = 0; i < circleArray.length; i++) {
            circleArray[i].draw();
            circleArray[i].update();
        }
    }
    else if (webState === 2) {
        c.fillStyle = "yellow";
        c.strokeStyle = "yellow";
        //lightning
        c.beginPath();
        c.lineWidth = 20;
        c.moveTo(innerWidth/2 - (innerWidth/8), innerHeight/4.2);
        c.lineTo(innerWidth/2 - (innerWidth/12), innerHeight/3);
        c.lineTo(innerWidth/2 - (innerWidth/7), innerHeight/3.2);
        c.lineTo(innerWidth/2 - (innerWidth/9), innerHeight/2.2);
        c.stroke();

        //main cloud
        c.strokeStyle = "white";
        c.lineWidth = 1;
        mainCloud.draw();
        c.fillStyle = "yellow";
        c.strokeStyle = "yellow";
        c.fillStyle = "black";
        c.font = "15px Garamond";
        if (innerWidth < 1000) {
            c.font = "8px Garamond";
        }
        c.fillText("Deployment Methods", innerWidth/2 - (innerWidth/5.5), innerHeight/4.5);
        c.fillText("Services", innerWidth/2 + (innerWidth/10), innerHeight/4.5);
        c.font = "30px Garamond";
        if (innerWidth<1000) {
            c.font = "15px Garamond";
        }
        c.fillText("How It Works", innerWidth/2 - (innerWidth/13), innerHeight/2 - (innerHeight/3));
        //c.rotate(-1);
        c.font = "20px Garamond";
        c.fillText("Major Use Cases", innerWidth/2 - (innerWidth/8), innerHeight/2 - (innerHeight/7.5));
        //c.rotate(1)
        
        for (i = 0; i < rainyArray.length; i++) {
            rainyArray[i].draw();
            rainyArray[i].draw2();
            rainyArray[i].update();
        }
        c.fillText("Security", innerWidth/2 + (innerWidth/11), innerHeight/2)
        
        if (mouse.x > innerWidth/2 - (innerWidth/5.5) && mouse.x < (innerWidth/2 - (innerWidth/5.5)) + innerWidth/10) {
            if (mouse.y > innerHeight/4.5 - (innerHeight/50) && mouse.y < (innerHeight/4.5 - (innerHeight/50)) + innerHeight/20 - (innerHeight/50)) {
                c.fillStyle = "blue";
                c.font = "15px Garamond";
                if (innerWidth < 1000) {
                    c.font = "8px Garamond";
                }
                c.fillText("Deployment Methods", innerWidth/2 - (innerWidth/5.5), innerHeight/4.5);
                if (mouse.click) {
                    
                    let line = {
                        orgx: innerWidth/2 - (innerWidth/5.5),
                        orgy:  innerHeight/4.5,
                        x:  innerWidth/4,
                        y:  innerHeight/4
                    }
                    
                    lineArray.push(line);
                    

                    let rect = {
                        x: 5,
                        y: innerHeight/4,
                        w: innerWidth/4,
                        h: innerHeight/5
                    }
                    rectArray.push(rect);
                    mouse.click = false;
                    
                    textArray = [
                        "Deployment Methods",
                        "Public: Similar to a Bus System",
                        "Private: Similar to Owning a Car",
                        "Hybrid: Similar to Taxi Services"
                    ]
                }
            }
        }
        if (lineArray.length > 0) {
            
            for (i = 0; i < lineArray.length; i++) {    
                drawLine(lineArray[i].orgx, lineArray[i].orgy, lineArray[i].x, lineArray[i].y);
            }
        }
        for (i = 0; i < rectArray.length; i++) {
            c.fillStyle = "gray";
            c.fillRect(rectArray[i].x, rectArray[i].y, rectArray[i].w, rectArray[i].h);
            coolx = rectArray[i].x;
            cooly = rectArray[i].y
            coolh = rectArray[i].h;
            if (textArray.length > 0) {
                c.fillStyle = "white";
                c.font = "30px Garamond";
                for (i = 0; i < textArray.length; i++){
                    c.fillText(textArray[0], coolx, cooly + (innerHeight / 60));
                    c.fillText(textArray[1], coolx, cooly + (coolh / textArray.length));
                    c.fillText(textArray[2], coolx, cooly + 2 * (coolh / textArray.length));
                    c.fillText(textArray[3], coolx, cooly + 3 * (coolh / textArray.length));
                }
            }

            }
        }
        
        
        

    }

    

    
    
    


animate();
