# workshop 4
 

Website link: https://harn475.github.io/workshop-4/


# Overview

"Workshop 4: Interactivity
Create an interactive p5.js sketch with at least three different kinds of user input events.
Experiment with ways to record and redeploy inputs from the user.
Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work."

- 

  
# Notes

In this interactive p5.js sketch, the user can control a fan's blade rotation speed, change the background color of the room, and display text on the canvas based on user input. The sketch incorporates various forms of user interaction, including button clicks, text input, and a slider, providing a dynamic and engaging experience.

Fan Blade Rotation: Three buttons allow the user to adjust the fan blade rotation speed to "Slow", "Medium", or "Fast". The blade rotates accordingly when a speed is selected.
Text Display: An input field and a button allow the user to enter custom text, which will be displayed on the canvas when submitted.
Room Color Customization: A slider is provided to adjust the color of the room's background, giving users the ability to change the ambiance of the scene.





# Progress (Problem Solving/Code)

Loading Assets: Used the preload() function to load images for the fan, room, and blade. This ensures the images are ready before the sketch starts.
User Interaction: Implemented buttons and input fields with specific functionality for changing the rotation speed, displaying text, and adjusting the room color.
Fan Blade Rotation: The rotation of the fan's blade is controlled by a variable (rotationSpeed) that is updated based on user input from the buttons. The rotation is applied only to the blade image, while the room and fan images remain static.
Room Color Customization: A slider was used to modify the color of the room. The pixels of the room image are updated in real-time based on the slider's value.



**Final coding comments**
The use of push() and pop() ensures the transformations applied to the blade (such as rotation) do not affect other elements in the sketch.
The text input and submission mechanism work as expected, allowing users to input and clear the text on the canvas.
The slider updates the room color dynamically, and the background color adjusts smoothly as the slider value changes.

# Future development 

# Reflection
This project provided an excellent opportunity to experiment with various user input events in p5.js. By combining buttons, sliders, and input fields, I was able to create an interactive and visually appealing sketch. The use of image manipulation (like rotating the fan blade and altering room colors) added complexity and allowed me to explore different aspects of p5.js, such as pixel manipulation and interactive design. In the future, I aim to improve the sketch’s functionality and expand on the concept with more interactive elements.


**Reference List:**

1. p5.js Reference - 2D Primitives. (n.d.). Retrieved from [https://p5js.org/reference/#2D%20Primitives](https://p5js.org/reference/#2D%20Primitives)
   
2. p5.js Discourse Forum. (n.d.). Retrieved from [https://discourse.processing.org/c/p5js/10](https://discourse.processing.org/c/p5js/10)
   
3. Reddit Users.

---

**Declaration:**

I declare that I received help with my coding from my flatmate, who is experienced with programming. Additionally, I conducted several quick Google searches to resolve issues encountered during the development process. These searches helped in understanding how to implement specific features and troubleshoot problems, especially related to p5.js, as well as getting advice from relevant forums and communities.
