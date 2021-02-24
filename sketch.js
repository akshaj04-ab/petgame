var dog,dogIMG ,happyDogIMG,happyDog;
var database;
var foodS, foodStock;

function preload(){
dogIMG=loadImage("images/dogIMG");
happyDogIMG=loadImage("images/dogIMG1")	;
}

function setup() {
	var canvas=createCanvas(500, 500);

  database=firebase.database();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

dog=createSprite(250,250,20,40);
 dog.addImage("drago",dogIMG); 
}


function draw() {  
  background(36,149,87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDogIMG);

}


  drawSprites();
  text("bottles left:"+foodStock);

}

function readStock(data){

foodS=data.val();

}

function writeStock(x){

if(x<=0){
  
  x=0
}else{

  x=x-1

}
database.ref('/').update({

food:x

})

}



