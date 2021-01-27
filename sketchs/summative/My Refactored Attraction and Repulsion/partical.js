var G = 50;
var l = 5;

function Partical(x,y) {
    this.pos = createVector(x,y);
    this.prev =  createVector(x,y);
    this.vel = createVector();//p5.Vector.random2D();
    //this.vel = p5.Vector.random2D();//p5.Vector.random2D();
    //this.vel.setMag(random(2, [5]));
    this.acc = createVector();
/**
 * A class to describe a two or three dimensional vector, 
 * specifically a Euclidean (also known as geometric) vector. 
 * A vector is an entity that has both magnitude and direction. 
 * The datatype, however, stores the components of the vector (x, y for 2D, and x, y, z for 3D).
 *  The magnitude and direction can be accessed via the methods mag() and heading().
 * Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc. 
 * Instead, we'll need to do some "vector" math, which is made easy by the methods inside the p5.Vector class.
 */

    this.update = function() {
      this.vel.add(this.acc);
      //Added this from other code
      this.vel.limit(l);
      /**Limit the magnitude of this vector 
       *to the value used for the max parameter.
       *max Number: the maximum magnitude for the vector.
       */
      this.pos.add(this.vel);
      this.acc.mult(0);
    }

    this.show = function() {
        //stroke(255, 255);//Border color and with alpha
        strokeWeight(4);//Thickness of the lines
        line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);

        this.prev.x = this.pos.x;
        this.prev.y = this.pos.y;
    }

    this.attracted = function(target) {
      var force = p5.Vector.sub(target,this.pos);
      /**
       * Since vectors represent groupings of values, we cannot simply use traditional addition/multiplication/etc. 
       * Instead, we'll need to do some "vector" math, which is made easy by the methods inside the p5.Vector class.
       */
      var d = force.mag();
      d = constrain(d, 1, 25);
      //G = 50;
      var strenth = G / (d * d);
      force.setMag(strenth);
      if (d >= 10) {
        stroke(255);
      }
      if (d < 20) {
        stroke(255, 0, 0);
        force.mult(-0.02);
      }
      this.acc.add(force);
    }
  }