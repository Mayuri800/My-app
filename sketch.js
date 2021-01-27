var prem,Bg,background,love,Meditation,me,Music,m,K,I,P,Q,Z,N,D,r,mp1,mp2,mp3,mp4,mp5,mp6,mp7,mp8;

function preload(){
   Bg = loadImage("BG.jpg");
  
  me = loadImage("medi.png");
  m = loadImage("M.png");
  k = loadImage("like.png");
I = loadImage("images.jpg");
  P = loadImage("read.jpg")

  Q = loadImage("river-free-nature-icons-nature-icon-png-1200_630.png")
  Z = loadImage("Rose.jpg")

  N = loadImage("meditation-1319987874677536274.png")
 
  r = loadImage("Pre.png")
  
  mp1 = loadSound("M2.mp3");
mp2 = loadSound("M3.mp3")
  mp3 = loadSound("M4.mp3")
  mp4 = loadSound("M5.mp3")
  mp5 = loadSound("M6.mp3")
   mp6 = loadSound("M7.mp3")
   mp7 = loadSound("M8.mp3")
  mp8 = loadSound("M9.mp3")
}


function setup() {
  createCanvas(600, 600);
 
  
}

function draw() {
  
 background(255)
  
 var background_1 = createSprite(280,260);
  background_1.addImage(Bg);
  background_1.scale = 0.5
  
  
  
 Love = createSprite(90,180);
  Love.addImage(k);
  Love.scale = 0.4
  Music = createSprite(510,180);
  Music.addImage(m);
  Music.scale = 0.3;
  Meditation = createSprite(290,90);
  Meditation.addImage(me);
  Meditation.scale = 0.08
  var nature = createSprite(70,300)
  nature.addImage(I)
  nature.scale = 0.2
   var life = createSprite(515,300)
  life.addImage(Q) 
  life.scale = 0.07
   var play = createSprite(85,430)
  play.addImage(P)
  play.scale = 0.3
   var bird = createSprite(300,540)
   bird.addImage(Z)
    bird.scale = 0.2
  var Kite = createSprite(490,430)
   Kite.addImage(N)
    Kite.scale = 0.1
  var Brain = createSprite(297,260)
   Brain.addImage(r)
  
   Brain.scale = 0.1
  
 
 
  
  if(mousePressedOver(Love)){
     mp1.play();
    mp2.stop();
    mp3.stop();
    mp4.stop();
    mp5.stop();
    mp6.stop();
    mp7.stop();
    mp8.stop();
     }
  if(mousePressedOver(Music)){
     mp3.play();
    mp1.stop();
    mp2.stop();
    mp4.stop();
    mp5.stop();
    mp6.stop();
    mp7.stop();
    mp8.stop();
     }
  if(mousePressedOver(nature)){
    mp4.play();
     mp3.stop();
    mp1.stop();
    mp2.stop();
    mp5.stop();
    mp6.stop();
    mp7.stop();
    mp8.stop();
     }
   if(mousePressedOver(life)){
     mp5.play();
    mp4.stop();
     mp3.stop();
    mp1.stop();
    mp2.stop();
     mp6.stop();
     mp7.stop();
     mp8.stop();
     }
  if(mousePressedOver(Kite)){
    mp6.play();
     mp5.stop();
    mp4.stop();
     mp3.stop();
    mp1.stop();
    mp2.stop();
    mp7.stop();
    mp8.stop();
     }
  if(mousePressedOver(play)){
    mp7.play();
     mp1.stop();
    mp2.stop();
    mp3.stop();
    mp4.stop();
    mp5.stop();
    mp6.stop();
    mp8.stop();
     }
  if(mousePressedOver(bird)){
    mp8.play();
    mp7.stop();
     mp1.stop();
    mp2.stop();
    mp3.stop();
    mp4.stop();
    mp5.stop();
    mp6.stop();
     }
  if(mousePressedOver(Brain)){
     mp1.stop();
    mp2.stop();
    mp3.stop();
    mp4.stop();
    mp5.stop();
    mp6.stop();
    mp7.stop();
    mp8.stop();
    
     }
  if(mousePressedOver(Meditation)){
     mp1.stop();
    mp2.play();
    mp3.stop();
    mp4.stop();
    mp5.stop();
    mp6.stop();
    mp7.stop();
    mp8.stop();
     }
  
  
  
  
  //med();
  drawSprites();
  //text(mouseX+","+mouseY,mouseX,mouseY);

}