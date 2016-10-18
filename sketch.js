
//song variable
  var sss;

//arrays
  var heads = [];
  var torsos = [];
  var feets = [];

//random
  // var r;
  // var r2;
  // var r3;

function preload(){
  //heads
    heads[0] = loadImage("images/head_wolf.png");
    heads[1] = loadImage("images/head_nes.png");
    heads[2] = loadImage("images/head_lagoon.png");
    heads[3] = loadImage("images/head_ghost.png");
    heads[4] = loadImage("images/head_mummy.png");

  //torsos
    torsos[0] = loadImage("images/torso_wolf.png");
    torsos[1] = loadImage("images/torso_nes.png");
    torsos[2] = loadImage("images/torso_lagoon.png");
    torsos[3] = loadImage("images/torso_mummy.png");

  //feet
    feets[0] = loadImage("images/feet_wolf.png");
    feets[1] = loadImage("images/feet_nes.png");
    feets[2] = loadImage("images/feet_lagoon.png");
    feets[3] = loadImage("images/feet_ghost.png");
    feets[4] = loadImage("images/feet_mummy.png");

  //song
    sss = loadSound("music/sss.mp3");
}

function setup(){
  createCanvas(600, 600);
    background(230);

  //music play
  push();
    sss.play();
  pop();

}

function draw(){

}

function mouseReleased(){
  background (230);

  var r = (0, 5)
  var r2 = (0, 4)
  var r3 = (0, 5)

 image(feets[round(random(0, 4))], 0, 0);

 image(torsos[round(random(0,3))], 0, 0);

 image(heads[round(random(0,4))], 0, 0);
 }
