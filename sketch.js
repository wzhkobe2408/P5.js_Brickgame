var paddle;
var ball;
var bricks = [];
var playingGame = false;
var youWin = false;
var winText;
var startText;

function setup() {
  createCanvas(windowWidth, windowHeight);
  paddle = new Paddle();
  ball = new Ball();
  for(var i = 0;i < 30; i++) {
    bricks.push(new Brick())
  }
  createText()
}

function draw() {
  background(255);
  paddle.display();
  if(playingGame) paddle.update();
  if(playingGame) paddle.checkEdges();

  ball.display();
  if(playingGame) ball.move();
  if(playingGame) ball.checkEdges();
  ball.meets(paddle);

  for(let i = 0; i < bricks.length; i++) {
    if(ball.hits(bricks[i])) {
        if(bricks[i].r >= 40) {
          bricks[i].r = bricks[i].r / 2;
        }else if(bricks[i].r < 40) {
          bricks.splice(i, 1);
        }
        ball.direction.y *= -1;
      }
    }

  for(let i = 0; i < bricks.length; i++) {
    bricks[i].display();
  }

  if(ball.pos.y > height - ball.r) {
    playingGame = false;
    ball.pos.y = height / 2;
    ball.pos.x = width / 2;
  }

  if(bricks.length === 0) {
    youWin = true;
    playingGame = false;
  }

  if(youWin) {
    winText.style('display', 'block');
  }else {
    winText.style('display', 'none');
  }

}

function keyPressed() {
  if(key === 'a' || key === 'A') {
    paddle.isMovingLeft = true;
  }else if(key === 'd' || key === 'D') {
    paddle.isMovingRight = true;
  }else if(key === 's' || key === 'S') {
    playingGame = true;
    youWin = false;
    if(bricks.length === 0) {
      for(var i = 0; i < 20; i++) {
        bricks.push(new Brick());
      }
    }
  }
}

function keyReleased() {
    paddle.isMovingLeft = false;
    paddle.isMovingRight = false;
}

function createText() {
  winText = createP('YOU WIN!!!');
  winText.position(width / 2 - 50, 80);
  startText = createP('Enter S key to start the game!');
  startText.position(width / 2 - 150, 20);
  startText.style('font-size','25px');
}
