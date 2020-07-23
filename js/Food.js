class Food {
  constructor() {
    this.image = loadImage("images/Milk.png");
    this.foodStock = 0;
    this.lastFed;

  }
  updatefoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getfedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductfood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getfoodStock(){
      return this.foodStock;
    }
    bedroom()
    {
      background(bedroom,500,200)
    }
    washroom()
    {
      background(washroom,500,200)
      
    }
    garden()
    {
      background(graden,500,200)
    }
    
  display() {
    var x = 80,
      y = 80;

    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    if (this.foodStock != 0) {
      for (var i = 0; i < this.foodStock; i++) {
        if (i % 10 == 0) {
          x = 80;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
      }
    }

  }
}