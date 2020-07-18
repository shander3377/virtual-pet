//Create variables here
var dog;
var happydog;
var dogImg1
var db;
var foodS;

function preload()
{
  dogImg1 = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png")
}

function setup() {
  db = firebase.database()
	createCanvas(800, 700);
  
  createCanvas(500,500);
  
  dog = createSprite(250,250,10,10);
  dog.addImage("dog",dogImg1);
  var foodStock;
  foodStock = db.ref("food")
    foodStock.on("value", readStock)
}


function draw() {  
background(46, 139, 87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  console.log(foodS);
  dog.addImage("happyDog",happydog);
}
  drawSprites();
  text("Food Stock :",foodS,200,400 )
  //add styles here
  
}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0
  }
  else{
    x = x - 1;
  }
  db.ref('/').update({
    food:x 
  })
}




