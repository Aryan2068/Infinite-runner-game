class ground{
    constructor(x,y,w,h){
        var options = {
            isStatic = true
        }
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        var position = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(position.x,position.y,this.width,this.height);
    }
};