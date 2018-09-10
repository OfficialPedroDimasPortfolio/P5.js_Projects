var len = 100/0.77;
var angle;

function setup() {
    createCanvas(400, 400);
    slider = createSlider(0, 2*PI, PI/3, 0.01);
}

function branch(leng){
    if(leng > 2){
        push();
        line(0,0,0,-leng);
        translate(0,-leng);
        rotate(angle);
        branch(leng*0.70);
        pop();
        push();
        
        line(0,0,0,-leng);
        translate(0,-leng);
        rotate(-angle);
        branch(leng*0.70);
        pop();
    }
}

function draw() {
    angle = slider.value();
    background(50);
    stroke(255);
    translate(width/2, height);
    branch(len*0.70);
}