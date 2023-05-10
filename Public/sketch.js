var socket;
let timer = 0;



function setup() {

  socket = io.connect('http://localhost:4000')
  socket.on('mouse',newDrawing);

  createCanvas(700, 700);
  background(0);


}

function draw() {
  
  mouseDragged();

  
  

  let shape = random(["circle", "rectangle", "triangle"]);
  let x = random(width);
  let y = random(height);
  var size = random(50, 80);

  noStroke();
  fill(random(0,255),random(0,255),random(0,255));
  
  if (shape === "circle") {
    ellipse(x, y, size, size);
  } else if (shape === "rectangle") {
    rect(x, y, size, size);
  } else if (shape === "triangle") {
    triangle(x, y, x + size, y, x + (size / 2), y + size);
  }

  

  timer +=deltaTime

  if(timer > 30000){
    clear();
    background(0);
    timer = 0;
    
  }
  


  frameRate(1);
}

  
  




function newDrawing(data){
  noStroke();
  circle(data.x, data.y, 20);
  fill(random(0,255),random(0,255),random(0,255))

}

function mouseDragged(){
 
  console.log('Sending:' + mouseX + ','+ mouseY)
  
  var data = {
    x:random(200,400),
    y:random(280,700)

  }
  socket.emit('mouse',data);
  
  line(random(width), random(10,100), random(200,400), random(100,300));
  stroke(255);
}

