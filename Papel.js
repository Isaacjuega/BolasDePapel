class papel {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("paper.png")
        
        World.add(world, this.body);
      }
    display(){
        var rubberpos=this.body.position;		

        push()
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("white");
        ellipse(0, 0, this.r, this.r)
        pop()
}

}