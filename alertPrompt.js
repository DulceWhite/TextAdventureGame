// ALERT AND PROMPT

// Testing that the JS file is linked to the HTML file
console.log(`Linked to HTML file`);

// Alert (Alerts the user with a message)
alert(`Hello!`);

// Prompt (Prompts the user to enter something)
prompt(`Welcome to the page. What is your name?`);

alert(`Cool Name!`);

// Prompt returns the user's response which can be set as a value for a variable
let favColor = prompt(`What is your favorite color?`);

// Displaying the user's response in the Console tab in the Chrome Dev Tools
console.log(favColor);

// The alert in this IF statement will only run (AKA Be displayed in the browser) when the user enters in Cornflowerblue (NOTE: Must be an uppercase C in this example)
if (favColor === `Cornflowerblue`) {
  alert(`Cornflowerblue is also my favorite color!`);
}

// Using the user's response in an alert
alert(`Your favorite color is ${favColor}`);