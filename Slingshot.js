class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.03,
            length:1
        }
        //this.bodyA = loadImage("polygon.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(myWorld,this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    display(){
        
        if(this.sling.bodyA){
        var posA = this.sling.bodyA.position;
        var posB = this.pointB;
        push();
        strokeWeight(3);
        line(posA.x,posA.y,posB.x,posB.y);
        pop();
        }

    }
}