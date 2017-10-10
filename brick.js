function Brick(){
  this.r = random(20, 80);
  this.pos = createVector(random(100, width - 100), random(100, height - 200));

  this.total = 6;

  this.display = function() {
    fill(255,132,0,100);
    noStroke();
    push();
    translate(this.pos.x, this.pos.y);
    beginShape();
    for(var i = 0; i< this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var x = this.r * cos(angle);
      var y =this.r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
}
