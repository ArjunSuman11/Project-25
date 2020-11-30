class Dustbin {
    constructor(x,y,width,height){
        var Options={
            isStatic: true
        }
        
        this.body=Bodies.rectangle(x, y, width, height, Options);
        this.width= width;
        this.height= height;
        this.image= image;
        this.image=loadImage("sprites"/"dustbingreen.png");

        World.add(world, this.body);
    }

    display(){
        rectMode(CENTER);
        fill(255,255,255);
 
        rect(this.body.position.x,this.body.position.y,this.width, this.height);
    }
    
}