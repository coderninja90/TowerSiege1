class Ground{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("yellow");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);

    }
}