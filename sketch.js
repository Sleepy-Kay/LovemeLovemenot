let petalimg;

let titleScreenimg;

let centerimg;

let happyFaceimg;

let sadFaceimg;

let endScreenimg;


let flower = {
  currentState : 'start',
  numberPetals : 0,
  x : 50,
  y : 50,
  petalOffsetX : 5,
  petalOffsetY : 10,
  petalAngle : 0,
  oddEven : 'neither',
  imageHeight : 100,
  imageWidth : 200,

  initialize : function(numPet,angle,x,y){
    if (numPet % 2 == 0){
      this.oddEven = 'even';
    }
    else { (numPet % 1 == 0)
      this.oddEven = 'odd';
    }
    this.numberPetals = numPet;
    this.petalAngle = angle;
    this.x = x;
    this.y = y;
    this.currentState = "plucking";
  },

  
  display : function(){
    
    if(this.numberPetals!=0){
       push();
        translate(0,0);
        image(centerPetal,this.x -100,this.y -100,200,200);
      pop();
      
        for(i=0; i<this.numberPetals; i++){
          push();
            translate(this.x,this.y);
            rotate(i*this.petalAngle);
            image(petalimg,this.petalOffsetX,this.petalOffsetY,this.imageWidth,this.imageHeight);
          pop();
        }
      }
      else {
        this.currentState = "endScreen";
        // the finish text here
        
        if(this.oddEven == "even"){
          image(happyFaceimg,130,130,250,250);
          //text('test',0,0);
          print('win');
        }
        else if(this.oddEven == "odd") {
          image(sadFaceimg,130,130,250,250);
          //final text lose state
          print('lose');
        }
      }


  },
      
  
  update : function(){
    //reduces the number of petals
    this.numberPetals = this.numberPetals - 1;

    
  }
}


function preload(){
  titleScreenimg = loadImage('img/titleScreen.png');
  endScreenimg = loadImage('img/endScreen.png');
  happyFaceimg = loadImage('img/happyFace.png');
  sadFaceimg = loadImage ('img/sadFace.png');
  petalimg = loadImage ('img/Petal.png');
  centerPetal = loadImage('img/centerPetal.png');


  //here is where you put the loading syntax for your petals
}https://editor.p5js.org/kawong2446/sketches


function setup() {
  angleMode(DEGREES);
  createCanvas(500,550);
 // flower.init5ialize(random(0,2));
 
  print(flower.numberPetals);
}

function draw() {
  background(220);
  if (flower.currentState == 'start' &&titleScreenimg!=null){
      image(titleScreenimg,0,0,500,550);

  }
  else {
    flower.display();
  }

  
}

function mousePressed(){
  if (flower.currentState == 'start'){
    
    //you could also create a random function here that generates a number between 0 and 2 and if it's greater than 1 you do the even initialization and if it's not you do the odd initiationalization
    
    let coin = random(0,2);
    
    if (coin>1){
      flower.initialize(8,45,250,250);
    } 
    else {
      flower.initialize(7,52,250,250);
    }
    
  }
  else{
    flower.update();
  }
}

