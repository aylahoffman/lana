
var img1
var poetry = ["you see, I'm a real poet.", "Past The Cypress Through The Bushes"];

var index = 0;

function preload(){
  img1 = loadImage("flowers.jpg");
}
function setup() {
  createCanvas(800, 800);
    noStroke();

}

function draw() {
background('220');
    ellipse(mouseX, mouseY, 33, 33);
    imageMode(CORNER); 
  image(img1, 0, 0); 
  
  textSize(24);
  fill('white');
  text(poetry[index], width/2.4, height/2);
  
    push();
  fill(255);
  noStroke();

}

function mousePressed (){
  index = index +1;
  if(index == poetry.length){
    index = 0;
  }
}

