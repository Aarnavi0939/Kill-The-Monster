class Monster {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            density:2
        }
        this.image = loadImage("images/Monster-01.png");
        this.r = 60;
        this.body = Bodies.circle(x, y, this.r, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("red");
        image(this.image, 0,0,this.r+100,this.r+100);
        pop();
    }

}