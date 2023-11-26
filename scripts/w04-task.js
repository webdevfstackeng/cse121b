/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Kgotla Ephraim Boabilwe",
    photo: "images/kgotla.png",
    favoriteFoods: ["Meat",
        "Fish", 
        "Maize Meal", 
        "Milk", 
        "Cauliflower"],
    hobbies: ["Jogging", 
        "Hicking", 
        "Paying soccer",
        "Walking" ],
    placesLived: [],
};

/* Populate Profile Object with placesLived objects */
myProfile.placesLived.push ({
    place: "Phase 2, Gaborone",
    length: "36 years"
},
{   place: "Sebako Ward, Kanye",
    length: "12 years"
},
{   place: "Nkaikela Ward, Rakhuna",
    length: "8 years"
});

/* DOM Manipulation - Output */

/* Name */  
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute('src', myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
// A function to create the <dt> elements and append them to <dl> element
function populatePlacesLived() {
    let placesLivedData = myProfile.placesLived;
    let dlElement = document.querySelector("#places-lived");

    placesLivedData.forEach(place => {
        // Create <dt> element and assign it "place" property
        let dtElement = document.createElement("dt");
        dtElement.textContent = place.place;

        // Create <dd> element and assign it "length" property
        let ddElement = document.createElement("dd");
        ddElement.textContent = place.length;

        // Append <dt> and <dd> elements to <dl> element
        dlElement.appendChild(dtElement);
        dlElement.appendChild(ddElement);
    });
}

// Call populatePlacesLived() to populate the places-lived <dl> element.
populatePlacesLived();
