function Paddle() {
  this.w = 160;
  this.h = 20;
  this.pos = createVector(width/2 - this.w/2, height-40);

  this.isMovingLeft = false;
  this.isMovingRight = false;

  this.display = function() {
    fill(181,169,129);
    noStroke();
    rect(this.pos.x, this.pos.y, this.w, this.h);
  }

  this.move = function(step) {
    this.pos.x += step;
  }

  this.update = function() {
    if(this.isMovingRight) {
      this.move(20);
    };
    if(this.isMovingLeft) {
      this.move(-20);
    };
  }

  this.checkEdges = function() {
    if(this.pos.x < 0) {
      this.pos.x = 0;
    }
    if(this.pos.x > width - this.w) {
      this.pos.x = width - this.w;
    }
  }

}
