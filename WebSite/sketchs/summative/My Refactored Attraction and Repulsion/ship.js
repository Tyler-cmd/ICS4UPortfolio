var G2 = 50;

function Ship() {
    this.pos = createVector(width/2, height/2);
    this.r = 20;
    this.heading = radians(0);
    this.rotation = 0;
    this.vel = createVector(0,0);
    this.isBoosting = false;
  
  
    this.boosting = function(b){
      this.isBoosting = b;
    }
  
  
    this.update = function() {
      if(this.isBoosting) {
        this.boost();
      }
      
      this.pos.add(this.vel);
      this.vel.mult(0.99);
      this.vel.limit(20);
    }
  
  
    this.boost = function() {
      var force = p5.Vector.fromAngle(this.heading);
      force.mult(0.2);
      this.vel.add(force);
    }
  
  
    this.render = function() {
      imageMode(CENTER);
      translate(this.pos.x, this.pos.y);
      rotate(this.heading + radians(90));
      image(img, 0 , 0, 100, 100);
      //triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    }
  
    this.edges = function() {
      if (this.pos.x > width + this.r) {
        this.pos.x = -this.r;
      } else if (this.pos.x < -this.r) {
        this.pos.x = width + this.r;
      }
      if (this.pos.y > height + this.r) {
        this.pos.y = -this.r;
      } else if (this.pos.y < -this.r) {
        this.pos.y = height + this.r;
      }
    }
  
  
    this.setRotation = function(a){
      this.rotation = a;
    }
  
    this.turn = function(){
      this.heading += this.rotation;
    }

    this.attracted2 = function(target2) {
      //console.log("in attracted2");
      //console.log(target2);
      var force2 = p5.Vector.sub(target2,this.pos);
      /**
       * Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc. 
       * Instead, we'll need to do some "vector" math, which is made easy by the methods inside the p5.Vector class.
       */
      var d2 = force2.mag();
      //d2 = constrain(d2, 1, 25);
      //G = 50;
      var strenth2 = G2 / (d2 * d2);
      force2.setMag(strenth2);
      /*if (d2 >= 10) {
        stroke(255);
      }*/
      if (d2 < 20) {
        //stroke(255, 0, 0);
        force2.mult(-0.02);
      }
      this.vel.add(force2);
    }
}