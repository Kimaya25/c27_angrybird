class chain{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.03
        } 
      this.chain = Constraint.create(options);
      World.add (world,this.chain);
    }
    display(){
        var point1 = this.chain.bodyA.position;
        var point2 = this.chain.bodyB.position;
        strokeWeight (4);
        line(point1.x,point1.y,point2.x,point2.y);

    }
}