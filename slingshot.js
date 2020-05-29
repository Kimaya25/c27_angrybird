class slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.03
        } 
    this.pointB = pointB;
      this.slingshot = Constraint.create(options);
      World.add (world,this.slingshot);
    }
    fly(){
        this.slingshot.bodyA = null
    }
    display(){
       if(this.slingshot.bodyA){
        var point1 = this.slingshot.bodyA.position;
        var point2 = this.pointB;
        strokeWeight (4);
        line(point1.x,point1.y,point2.x,point2.y);

    }
}
}