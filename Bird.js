//using extend to take properties from baseclass
class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    //loading the animation
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   //displaying the sprite
    super.display();
  }
}
