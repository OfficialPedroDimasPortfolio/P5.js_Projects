var points = [];
var big = [];
var ammount;

function setup() {
    createCanvas(400, 400);
    stroke(255);
    fill(50);
    slider = createSlider(0, 10, 1, 0.01);
}

function drawAndBig(){
    for (let i = 0; i < points.length; i++) {
        if(!(big[i] > 100)){
            ellipse(points[i].x, points[i].y, big[i], big[i]);
        big[i]+=ammount;
        }
    
    }
    

}

function draw() {
    background(50);
    ammount = slider.value();
    var pos = createVector(random(0, width), random(0,height));
    points.push(pos);
    big.push(10);
    drawAndBig();
}
