

class Paper{
    constructor(){
        var opt={
            isStatic:false,
            restitution:0.6, 
            friction:0.5,
            density:1.2,

            
        }
        this.body=Bodies.circle(100,200,20,opt);
        World.add(world,this.body)

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        ellipseMode(RADIUS);
        fill("blue")
        ellipse(0,0,20,20);
        pop();
    }
}