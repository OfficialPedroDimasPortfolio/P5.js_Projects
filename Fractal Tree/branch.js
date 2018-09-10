function Branch(begin, end){
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.show = function(angle){
        stroke(255);
        this.angle = angle;
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.abana = function(amount){
        this.end.x += random(-amount, amount);
        this.end.y += random(-amount,amount);
    }

    this.branchA = function(){
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(angle);
        dir.mult(0.70);
        var newEnd = p5.Vector.add(this.end, dir);
        var a = new Branch(this.end, newEnd);
        return a;
    }

    this.branchB = function(){

        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-angle);
        dir.mult(0.70);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    }
}