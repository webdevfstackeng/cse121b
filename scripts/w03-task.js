/* LESSON 3 - Programming Tasks */

// FUNCTIONS 
// Function Definition - Add Numbers 
function add(number1, number2)
{
    return number1 + number2;
}

/* Using a function declaration to define another function named addNumbers that gets the values
of two HTML form controls with IDs of add1 and add2. */
function addNumbers()
{
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);

}
/* This line of code is NOT located inside a function. this is to enable the addNumbers
function to be called immediately the button is clicked to execute the required instructions quickly. */
document.querySelector('#addNumbers').addEventListener('click', addNumbers); 

/* Function Expression - Subtract Numbers */
const subtract = function(subtract1, subtract2)
{
    return subtract1 - subtract2;
};

const subtractNumbers = function() 
{
    // Get the values of the HTML form controls and convert them to numbers
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);

}
/* Placed outside the function body to enable the subtractNumbers function to execute faster
 in response to the button click */
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Arrow Function - Multiply Numbers 
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    // Get the values of the HTML form controls and convert them to numbers
    let multiplyFactor1 = Number(document.querySelector('#factor1').value);
    let multiplyFactor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyFactor1, multiplyFactor2);

}
/* Placed outside the function body to enable the multiplyNumbers function to 
execute faster in response to the button click */
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    // Get the values of the HTML form controls and convert them to numbers
    let dividendNumber = Number(document.querySelector('#dividend').value);
    let divisorNumber = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(dividendNumber, divisorNumber);

}
// Placed outside the function body to enable the divideNumbers function to execute faster in response to the button click
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', function() {
    // Get the numeric value entered by the user in the subtotal field
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
  
    // Check if the membership checkbox is checked
    let applyDiscount = document.querySelector('#member').checked;
  
    // Apply a 15% discount if the member checkbox is checked
    let discount = applyDiscount ? 0.15 : 0;
  
    // Calculate the total due
    let total = subtotal * (1 - discount);
  
    // Output the total to the total span to two decimal places
    let totalSpan = document.querySelector('#total');
    totalSpan.textContent = `$${total.toFixed(2)}`;
});
  
// ARRAY METHODS - Functional Programming 

// Declaration and instantiation of an array variable to hold the numbers 1 through 13
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Output Source Array 

// Convert the array to a string representation and assign it to the HTML element's content
document.querySelector('#array').innerHTML = numbersArray.join(', ');

// Output Odds Only Array 

/* Find all of the odd numbers of the array variable and assign the result to 
the HTML element with an ID of odds. */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

/* Find all of the even numbers of the array variable and assign the result to 
the HTML element with an ID of evens. */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 == 0);

// Calculate sum of the array elements using reduce() method.
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

// Output Multiplied by 2 Array 
 
/* Get the reference to the HTML element with the ID "multiplied"
and multiply each element in the array by 2 using the map() method. */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

/* Use the map() and reduce() array methods to sum the array elements after multiplying each element by two.
Assign the result to the HTML element with an ID of sumOfMultiplied. */
document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(number => number * 2) // Multiply each element by 2
    .reduce((multiplied, number) => multiplied + number); // Add all the multiplied elements 

