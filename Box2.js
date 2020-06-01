class Box2 {
    constructor(){
        var options = {
            isStatic:true
            
        }


        this.body = Bodies.rectangle(560,415,20,100,options);
        World.add(world, this.body);

    }
    display(){
        
        rect(this.body.position.x,this.body.position.y,20,100)
        
    }
};
