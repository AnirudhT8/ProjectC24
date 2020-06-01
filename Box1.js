class Box1 {
    constructor(){
        var options = {
            isStatic:true,

        }
        this.body = Bodies.rectangle(650,475,200,20,options);
        World.add(world, this.body);

    }
    display(){
            rect(this.body.position.x,this.body.position.y,200,20);
        }

};
