class Ball {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.vx = random(-1,1);
    this.vy = 0;
    this.size = size;
  }

  update() {
    this.vy += 1.;
    this.vy = constrain(this.vy,0.0,10.0);
    this.x += this.vx;
    this.y += this.vy;
    
    if(this.y > height){
      this.y = 0;
    }
    
    if(this.x < 0){
      this.x = width;
    }
    
    if(this.x > width){
      this.x = 0;
    }
  }

  render() {
      circle(this.x,this.y,this.size);
  }
}

let balls = [];
let NUM_BALLS_START = 1000;

function setup() {
  createCanvas(windowWidth,windowHeight);

  for(let i = 0; i < NUM_BALLS_START;i++){
    balls.push(new Ball(windowWidth*random(0,1),windowHeight*random(0,1),10));
  }
}

function draw() {
  
  background(0,50);

  stroke(0,250,0);
  fill(0,250,0);
  
  for(let i = 0; i < NUM_BALLS_START;i++){

    let frac = float(balls[i].y) / float(height);
    let val = 0.5*(sin(frac*30.0 + float(frameCount)*0.1)+1.0);
    let green_shade = val*250;

    stroke(0,green_shade,0);
    fill(0,green_shade,0);

    balls[i].update();
    balls[i].render();
  }
  
}