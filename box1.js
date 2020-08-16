class Box1{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.1
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }

    display(){
        if(this.body.speed < 10){
          var pos =this.body.position;
          rectMode(CENTER);
          fill("red");
          rect(pos.x, pos.y, this.width, this.height);
        }else{
          tint(255, this.visibility);
          this.visibility = this.visibility - 5;
          World.remove(world, this.body);
        }
     }
     scoring(){
       if(this.visibility == 0){
         score = score + 3;
       }
     }
}