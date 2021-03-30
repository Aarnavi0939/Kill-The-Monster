class Box{
    constructor(x,y){
        var options={
            restitution:0.4
        }
        this.body=Bodies.rectangle(x,y,80,100,options);
        this.width=80;
        this.height=100;
        World.add(world,this .body);
    }
     display(){
         var pos = this.body.position;
         var angle= this.body.angle;
         push();
         translate(pos.x,pos.y);
         rotate(angle);
         fill("brown");
         rect(0,0,this.width,this.height);
         pop();
       }
    }