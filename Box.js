class Box{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,40,60,{restitution:0.4,friction:0.7});
        World.add(myWorld,this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,40,60);
        pop();
        
        
    }
}