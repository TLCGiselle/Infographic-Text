let font;
let font2;
let img;

function preload() {
  font = loadFont('Anton-Regular.ttf');
  font2 = loadFont('OpenSans-Regular.ttf');
  img = loadImage('Untitled (1).png');  // Ensure the path to the image is correct
}

function setup() {
  createCanvas(800, 1300);
  background('#cce7ff');
}

function draw() {
  background('#cce7ff');  // Clear the background on each draw call

  // Draw the first circle
  noStroke();
  fill(255, 255, 255, 100);
  let circle1X = width / 1.09;  // Adjust the x position here
  let circle1Y = 148;        // Adjust the y position here
  circle(circle1X, circle1Y, 290);

  // Draw the second circle with gradient and opacity
  let gradientCircleX = width / 1.08;  // Adjust the x position here
  let gradientCircleY = 130;        // Adjust the y position here
  drawGradientCircle(gradientCircleX, gradientCircleY, 315, 50); // 50 alpha for the gradient

  // Text on top of the circle
  textAlign(CENTER, CENTER);
  textFont(font2);
  textSize(25);
  fill('#408BD0');
  text('Keep the\nBeaches\nclean and\nsafe.', width / 1.12, 105);
 // Draw the image
 image(img, 490, 41, 300, 1000);  
  // Main title text
  textFont(font);
  textSize(120);
  fill('white');
  text('3      \n WAYS \nTO    \nHELP', width / 4, 260);

//more text 
textFont(font2)
textSize(20);
fill('black'); // Change the text color to white
textAlign(CENTER);

}

function drawGradientCircle(x, y, diameter, alpha) {
  let c1 = color(186, 224, 247, alpha);
  let c2 = color(144, 212, 252, alpha);
  for (let r = diameter; r > 0; --r) {
    let inter = map(r, 0, diameter, 0, 1);
    let c = lerpColor(c1, c2, inter);
    fill(c);
    ellipse(x, y, r, r);
  }
}


