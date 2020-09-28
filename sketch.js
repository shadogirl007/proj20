var car, wall
var speed, weight, deformation

function setup() {
  createCanvas(1600,400);

  createEdgeSprites();
  
  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  

  wall=createSprite(1500,800,60,canvas.height/2);
  wall.shapeColor=rgb(80,80,80);
  deformation= 0.5*weight*speed*speed/22500
}


  function draw() {
  background(255,255,255); 
    if(car.isTouching(wall)&&deformation<100){
     car.shapeColor=rgb(0,255,0);
     car.velocityX=0;
     //green
      }
      if(car.isTouching(wall)&&180>deformation>100){
        car.shapeColor=rgb(230,230,0);
        car.velocityX=0;
        //yellow
      }
      if(car.isTouching(wall)&&deformation>180){
        car.shapeColor=rgb(255,0,0);
        car.velocityX=0;
        //red
         }
       
  drawSprites();
    }




