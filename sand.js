class Sand {
    constructor(x, y,r) {
      var options = {
        'density':2,
        'friction': 5,
        'restitution':0.5
      };
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,(this.r-20)/2, options);
      
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
  
      push();
      translate(pos.x, pos.y);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      rectMode(CENTER)
      ellipse(0, 0, this.r, this.r);
      pop();
    };
  };
  