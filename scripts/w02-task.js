/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


// Declare and instantiate a variable to hold my name.
let fullName = "Kgotla Ephraim Boabilwe";

// Declare and instantiate a variable to hold the current year.
let currentYear = "2023";

// Declare and instantiate a variable to hold the file path and 
// file name of the image that you placed in the images folder as a string.
let profilePicture = "images/kgotla.png";

/* Step 3 - Element Variables */

// Use the document.getElementById() method to get the HTML elements 
// with their ids and store them in their respective const variables
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.getElementById("year");
const imageElement = document.getElementById("image");
// console.log(imageElement);

/* Step 4 - Adding Content */

// Assign the nameElement's innerHTML property the fullName variable value.
nameElement.innerHTML = '<strong>' + fullName +'</strong>';

// Set the content of the element to the value of the 'currentYear' variable
yearElement.textContent = currentYear;

const myFavoriteFoods = ["Meat", "Fish", "Maize Meal", "Milk", "Cauliflower"];
console.log(myFavoriteFoods);  
// Use the setAttribute method to set the src property of 
//foodElement.textContent = myFavoriteFoods.join(", ");
// the image element and set its value to the file path variable
imageElement.setAttribute('src', profilePicture); //or directly using: imageElement.src = profilePicture;
 
// Use the setAttribute method to set the alt property

// of the image element and set its value to equal 'Profile image
imageElement.setAttribute('alt', 'Profile image of' + fullName);

/* Step 5 - Array */

// Set the content of the element to hold your favorite foods array  //<div class="block"><p id="food"></p></div>
foodElement.textContent = myFavoriteFoods.join(", "); // Join the array elements with a comma and space.

// Declare and instantiate a variable to hold 
// another single favorite food item.
let favoriteFood = "Rice";

// Add the value stored in this new variable to end of favorite foods array.
myFavoriteFoods.push(favoriteFood);

// Display array elements with Rice string added.
console.log(myFavoriteFoods);  


// Modify the HTML element with the id of 
// food to display your favorite foods array.
foodElement.innerHTML += '<br>' + myFavoriteFoods;
console.log(myFavoriteFoods);  

// Remove the first element of the favorite foods array. 
myFavoriteFoods.shift();

//Append and display favorite foods array showing first element removed.
foodElement.innerHTML += '<br>' + myFavoriteFoods;
console.log(myFavoriteFoods);  

// Remove the last element in the favorite foods array.
myFavoriteFoods.pop();

// Append and display favorite foods array showing last element removed.
foodElement.innerHTML += '<br>' + myFavoriteFoods;
console.log(myFavoriteFoods);  






