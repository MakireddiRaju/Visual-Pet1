//Create variables here
dog,Happydog,foodS,foodStock,database
function preload()
{
dog.loadImage("images/dogImg.png")
}

function setup() {

  createCanvas(500,500);
 
  dog=createSprites(200,400) 
 
 foodStock=database.ref('Food')
 
 foodStock.on("value",readstock);
 
 if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage(dogHappy)
 }

 function readstock(data){
   foodS=data.val()
 }

 function writeStock(x){
   if(x<=0){
     x=0;
   }else{
     x=x-1;
   }

   database.ref('/').update({
     Food:x
   })
 }
}


function draw() {  
background(46, 139, 87)
textSize(11)
fill(blue)
stroke(white)
  drawSprites();

}




