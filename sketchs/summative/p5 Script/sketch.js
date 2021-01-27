var attractors = [];
var particals = [];

function setup() {
    createCanvas(1000, 507);
  }

  function mousePressed() {
    attractors.push(createVector(mouseX,mouseY));
  }

  
  function draw() {
      background(51);
      stroke(255);
      strokeWeight(4);

      particals.push(new Partical(random(width), random(height)));

      //This was coiped from other code to limit the amout of particles
      if (particals.length > 100) {
        particals.splice(0, 1);
        /**
         * Inserts a value or an array of values into an existing array. 
         * The first parameter specifies the initial array to be modified, and the second parameter defines the data to be inserted. 
         * The third parameter is an index value which specifies the array position from which to insert data. 
         * (Remember that array index numbering starts at zero, so the first position is 0, the second position is 1, and so on.)
         */
      }

      for (var i = 0; i < attractors.length; i++) {
          stroke(0, 255, 0);
          point(attractors[i].x, attractors[i].y);
      }

      stroke(255,255);

      for (var i = 0; i < particals.length; i++) {
        var partical = particals[i];

        for (var j = 0; j < attractors.length; j++) {
          partical.attracted(attractors[j]);
        }
      partical.update();
      partical.show();

      /**
       * partical(object) . (function name)
       */
    }
  }
