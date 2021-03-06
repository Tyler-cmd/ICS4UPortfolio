var attractors = [];
var particals = [];
var ship;
var img;
var fst = false;
var mousecountor = 0;


function preload() {
  //img = loadImage("real-rocket-ship-png.png");
  img = loadImage("ROCKET.png");
}



function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
  }

  function mousePressed() {
    if (mouseButton === LEFT && mousecountor === 1) {
      attractors.push(createVector(mouseX,mouseY));
    }
    if (mousecountor > 2) {
      mousecountor = 1;
    }
    mousecountor = 1;
  }

  function keyReleased() {
    ship.setRotation(0);
    ship.boosting(false);
  }

  function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
      ship.setRotation(0.1);
    }
    else if (keyCode === LEFT_ARROW) {
      ship.setRotation(-0.1);
    }
    else if (keyCode === UP_ARROW){
      ship.boosting(true);
    }
    else if (keyCode === 70) {
      var fs = fullscreen();
      fst = true;
      fullscreen(!fs);
      resizeCanvas(displayWidth, displayHeight);
    }
    else if(keyCode === 83) {
      G = 50;
      l = 5;
      console.log("G is: " + G);
      console.log("l is: " + l);
  }
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
          ship.attracted2(attractors[j]);
        }
      partical.update();
      partical.show();
    }

    if (keyIsDown(65)) {
      G = G+=1;
      l = l +=1;
      console.log("G is: " + G);
      console.log("l is: " + l);
  }
  else if (keyIsDown(68)) {
      G = G-=1;
      l = l-=1;
      console.log("G is: " + G);
      console.log("l is: " + l);
  }

    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
  }
