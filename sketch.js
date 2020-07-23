var dog, dogImg, dogImg1;
var database;
var foodS, foodStock;
var addFood;
var feedpet;
var fedTime, lastFed;


function preload() {
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

//Function to set initial environment
function setup() {
  database = firebase.database();
  createCanvas(1000, 400);

  dog = createSprite(250, 300, 150, 150);
  dog.addImage(dogImg);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  textSize(20);
  foodObj = new Food;
  feedpet = createButton("Feed the dog");
  feedpet.position(700, 95);
  feedpet.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(800, 95);
  addFood.mousePressed(addFoods);
}

// function to display UI
function draw() {
  background(46, 139, 87);
  foodObj.display();
  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
  drawSprites();
  fill(255, 255, 254);
  stroke("black");
  text("Food remaining : " + foodS, 170, 200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!", 130, 10, 300, 20);
  if (lastFed >= 12) {
    text("Last Feed : " + lastFed % 12 + " PM", 350, 30);
  } else if (lastFed == 0) {
    text("Last Feed : 12 AM", 350, 30);
  } else {
    text("Last Feed : " + lastFed + " AM", 350, 30);
  }
}

//Function to read values from DB
function readStock(data){
  foodS=data.val();
  foodObj.updatefoodStock(foodS);
}


function feedDog() {
  dog.addImage(dogImg1);

  foodObj.updatefoodStock(foodObj.getfoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getfoodStock(),
    FeedTime:hour()
  })
}

function addFoods() {
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
}