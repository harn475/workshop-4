let blade;
let room;
let fan;
let rotationSpeed = 0;  
let userInput;  
let textDisplay = '';  

function preload() {
  blade = loadImage('images/blade.webp');  
  room = loadImage('images/room.jpg');  
  fan = loadImage('images/fan.png');   
}

function setup() {
  createCanvas(400, 400);

  // Create three buttons with different speeds
  let slowButton = createButton('Slow');
  slowButton.position(50, 350);
  slowButton.mousePressed(() => rotationSpeed = 0.01);  // Slow speed

  let mediumButton = createButton('Medium');
  mediumButton.position(150, 350);
  mediumButton.mousePressed(() => rotationSpeed = 0.05);  // Medium speed

  let fastButton = createButton('Fast');
  fastButton.position(250, 350);
  fastButton.mousePressed(() => rotationSpeed = 0.1);  // Fast speed

  // Create input field for user to enter text
  userInput = createInput();
  userInput.position(50, 375);  

  // Create a button to submit the text
  let submitButton = createButton('Display Text');
  submitButton.position(250, 375);
  submitButton.mousePressed(displayText);  

  // Create slider to change room colour
  slider = createSlider(0, 100);

}

function draw() {
  background(220);

  // Draw room and fan as background
  image(room, 0, 0, width, height);  
  image(fan, 130, 170, 150, 170);  

  // Rotate only the blade 
  push();  
  translate(130 + 150 / 2, 150 + 170 / 2);  
  rotate(frameCount * rotationSpeed);  // Rotate the blade based on the speed
  
  // Blade positioned at the center of the fan
  imageMode(CENTER);  // Draw the image centered on the position
  image(blade, 0, 0, 150, 150);  
  pop();  // Restore original transformation matrix

  // Display the user-entered text 
  fill(0);  
  textSize(20); 
  textAlign(CENTER, CENTER);  
  text(textDisplay, width / 2, 50);  

  // slider stuff 
  let val = slider.value();
  room.loadPixels();
  for (let y = 0; y < room.height; y++){
    for (let x = 0; x < room.width; x++){
      let index = (x + y * room.width) * 4;
      room.pixels[index] = val
      room.pixels[index + 1] = 50
      room.pixels[index + 3] = 255
    }
  }
  room.updatePixels();
  
}

// Function to display the text entered by the user
function displayText() {
  textDisplay = userInput.value();  
  userInput.value('');  // Clear the input field after submission
}


