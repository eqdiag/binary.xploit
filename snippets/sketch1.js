

let particles = [];
let NUM_PARTICLES_START = 1500;
let NUM_TYPES = 2;

class Particle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.vx = random(-1,1);
    this.vy = 0;
    this.size = random(0.1,size);
    this.type = int(random(0,NUM_TYPES));
  }

  update(x,y,r) {
    let dx = this.x-x;
    let dy = this.y-y;
    let len2 = dx*dx+dy*dy;
    let fx = 0.0;
    let fy = 0.0;
    if(len2 < r){
      fx += dx*5.0;
      fy += dy*5.0;
    }
    
    this.vx = 1.0;
    this.vx += fx;
    this.vy = constrain(this.vy,0.0,7.0);
    this.vy += fy;
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
      if(this.type == 0){
        circle(this.x,this.y,this.size);
      }else{
        ellipse(this.x,this.y,this.size,this.size);
      }
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  for(let i = 0; i < NUM_PARTICLES_START;i++){
    particles.push(new Particle(windowWidth*random(0,1),windowHeight*random(0,1),10));
  }
}

function draw() {
  
  background(0,20);

  stroke(0,0,200);
  fill(0,0,200);
  
  for(let i = 0; i < NUM_PARTICLES_START;i++){

    let frac = float(particles[i].y) / float(height);
    //let mouseVal = (2.0*mouseY-1.0 + 2.0*mouseX-1.0)*0.005;
    let mouseVal = 0.0;
    let val = 0.5*(sin(frac*30.0 + float(frameCount)*0.1 +mouseVal)+1.0);
    //let green_shade = val*250;
    let blue_shade = 200;

    stroke(0,0,blue_shade);
    fill(0,0,blue_shade);

    particles[i].update(mouseX,mouseY,150.0);
    particles[i].render();
  }
  
}


