class BaseClass{
    constructor(x, y, width, height, angle) {
      //giving the sprites options  
      var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        
        //creating the object with bodies using rectangle
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        //adding the sprite to World
        World.add(world, this.body);
      }
      //displaying the sprite
      display(){
        //giving the angle a short form
        var angle = this.body.angle;
        //giving the sprite push
        push();
        //translating the positions
        translate(this.body.position.x, this.body.position.y);
        //rotating the angle
        rotate(angle);
        //keeping the shape in the center
        imageMode(CENTER);
        //giving the image its properties
        image(this.image, 0, 0, this.width, this.height);
        //giving the sprite pop
        pop();
      }
}