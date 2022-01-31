var count = -100; // initialize a counter variable
var faster = -100
function setup() {
createCanvas(800, 300);
rectMode(CENTER);
}
function draw() {
background(100);
// declaration of variables
var x = count;
var y = height / 2;
// circle
  fill(237, 34, 93);
  noStroke();
  ellipse(x + faster, y, 200, 200);
// rectangle
  fill(255);
  rect(x, y, 150, 30);
  count = count + 1;// increment the counter variable
  faster = faster + 5
//

}
