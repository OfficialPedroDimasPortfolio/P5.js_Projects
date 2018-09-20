var points = [];
var big = [];

function setup() {
    createCanvas(400, 400);
    stroke(255);
    fill(50);
}

function drawAndBig(){
    for (let i = 0; i < points.length; i++) {
        if(!(big[i] > 100)){
            ellipse(points[i].x, points[i].y, big[i], big[i]);
        big[i]+=2;
        }
    
    }
    

}

function draw() {
    background(50);
    var pos = createVector(random(0, width), random(0,height));
    points.push(pos);
    big.push(10);
    drawAndBig();
}
