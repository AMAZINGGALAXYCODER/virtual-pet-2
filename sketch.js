var dog,happyDog
var database
var foodS,foodStock

function preload()
{
	//load images here
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  this.Sprite = loadImage("dogImg.png");
  
}


function draw() {  
  if(keyWentDown(UP_ARROW)) {
   writeStocks(foodS);
   dog.addImage(dogHappy)
  }
  drawSprites();
  text("Press the up arrow key to give the dog food")
  //add styles here

}

function addFood(){
  var x = 80
  var y = 180

  ImageMode(CENTER)
  Milkbottle = createSprite(200,200,25,50)
  this.Sprite = loadImage("Milk.png");
  if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;)i++;{
      if(i%10==0){

        x=80
        y=y+50;

      }
    }

  }   

}

function readStocks(data) {
  foodS=data.val();
}


function writeStocks(x) {
  database.ref('/').update({
    Food:x
  })
}





