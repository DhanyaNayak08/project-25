class Paper {
    constructor(x,y,radius){
        this.radius=radius*2;
        var options={isStatic:false,restitution:0.2,}
        this.body=Bodies.circle(x,y,radius ,options)
        World.add(world,this.body)
       this.image = loadImage("paper.png");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
    }