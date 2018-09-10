
var angle = 0;
var tree = [];
var amount;


function setup() {
    createCanvas(400, 400);
    var a = createVector(width/2, height);
    var b = createVector(width/2,height-100);
    var root = new Branch(a, b);

    tree[0] = root;


    abana = createSlider(0, 10, 0, 0.01);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function mousePressed(){

    tree.forEach(branch => {
        if(!branch.finished){
            tree.push(branch.branchA());
            tree.push(branch.branchB());
            branch.finished = true;
        }
    }); 
}

function draw() {
    background(51);
    angle = slider.value();
    amount = abana.value();



    tree.forEach(branch => {
        branch.show(angle);
        branch.abana(amount);
    });

}

