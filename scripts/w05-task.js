/* ----------------------- W05: Programming Tasks -------------------------------- */

/* -------------- Declare and initialize global variables ---------------- */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* ----------------- displayTemples Function ---------------------------- */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const articleElement = document.createElement("article");
        const headingElement = document.createElement("h3");
        const imageElement = document.createElement("img");

        // Set data to created elements
        headingElement.textContent = temple.templeName;
        imageElement.src = temple.imageUrl;
        imageElement.alt = temple.location;

        // Append heading and image elements to the article element
        articleElement.appendChild(headingElement);
        articleElement.appendChild(imageElement);

        // Append article element to the global templesElement
        templesElement.appendChild(articleElement);
    });
};

// Call the displaytemples functions with the templeList argument
displayTemples(templeList);
        

/* ------------------------- async getTemples Function using fetch() -----------------*/

//Function to fetch temple data asynchronously
const getTemples = async () => {
  try {
    // Fetch temple data using fetch() method
    const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
    const response = await fetch(url); 

    // Convert fetch response to JSON and assign it to 'templeList'
    templeList = await response.json();

    // Call displayTemples function and pass the list of temples (templeList)
    displayTemples(templeList);
    
    // Logging templeList for review
    console.log(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

// Function to display temples (for illustration purposes)
const displyTemples = (temples) => {
  temples.forEach((temple) => {
    console.log(`Temple Name: ${temple.templeName}, Location: ${temple.location}`);
    // Additional operations or rendering logic can be performed here
  });
};

// Call getTemples function to fetch and display temple data
getTemples();


/* --------------------------------- reset Function ------------------------------- */

// Function to reset and clear displayed list of temples
const reset = () => {
    const templesElement = document.querySelector("#temples"); // Get reference to temples container
  
    // Clear all <article> elements from templesElement
    templesElement.innerHTML = ""; // Set innerHTML to an empty string to remove all child elements
};
  
  // Call the reset function to clear the displayed list of temples
  reset();
  
/* ----------------------------- sortBy Function --------------------------------- */

// Function expression named sortBy to sort the list of temples
const sortBy = (temples) => {
    // Call the reset function to clear the output
    reset();
  
    // Obtain the value of the HTML select element with ID "sortBy"
    const filter = document.querySelector("#sortBy").value;
  
    // Switch statement based on the filter value
    switch (filter) {
      case "utah":
        // Filter temples for locations containing "Utah" as a string
        displayTemples(temples.filter(temple => temple.location.includes("Utah")));
        break;
      case "nonutah":
        // Filter temples for locations not containing "Utah" as a string
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        // Filter temples for dedicated date before 1950 (compare versus new Date(1950, 0, 1))
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
      default:
        // Display all temples if "all" or no value is selected
        displayTemples(temples);
        break;
    }
};

getTemples();

/* ------------------------ Event Listener --------------------------- */

// Get reference to the HTML element with ID "sortBy"
const sortByElement = document.querySelector("#sortBy");
  
// Add a change event listener to "sortByElement"
sortByElement.addEventListener("change", () => {
    // Call the sortBy function and send an arrow function result with templeList as the argument
    sortBy(templeList);
});
  
/* --------------------------- End of Program -------------------------------------------- */