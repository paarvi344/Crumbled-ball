class Paper {
  constructor(x, y,radius) {
    var options = {
        'restitution':0,
        'friction':1,
        'density':1.2
    }
    this.body = Bodies.circle(x, y,radius,options);
    this.radius=radius;

    World.add(world,this.body);

  }
  display(){
    ellipseMode(RADIUS);

    fill("yellow");

    circle(this.body.position.x,this.body.position.y,this.radius)

  }
};
