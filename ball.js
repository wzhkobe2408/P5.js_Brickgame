function Ball() {
  this.pos = createVector(width/2, height/2);
  this.r = 30;
  this.direction = createVector(1, 1);
  this.vel = createVector(1, 1).mult(8);


  this.display = function() {
    fill(63,170,255,50);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
  }

  this.move = function() {
    this.pos.x += this.direction.x * this.vel.x;
    this.pos.y += this.direction.y * this.vel.y;
  }

  this.checkEdges = function() {
    if(this.pos.x < this.r && this.direction.x < 0) {
      this.direction.x *= -1;
    }

    if(this.pos.x > width - this.r && this.direction.x > 0) {
      this.direction.x *= -1;
    }

    if(this.pos.y < this.r && this.direction.y < 0) {
      this.direction.y *= -1;
    }
  }

  this.meets = function(paddle) {
    if(this.pos.x > paddle.pos.x - this.r &&
      this.pos.x < paddle.pos.x + paddle.w &&
      this.direction.y > 0 &&
      this.pos.y > paddle.pos.y - this.r &&
      this.pos.y < paddle.pos.y) {
      this.direction.y *= -1;
    }
  }

  this.hits = function(brick) {
    var distance = dist(this.pos.x, this.pos.y, brick.pos.x, brick.pos.y);
    if(distance < this.r + brick.r) return true;
    else return false;
  }

}
