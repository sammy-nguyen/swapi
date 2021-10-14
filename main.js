// making a request
// As you complete this section, be sure to test along the way using Postman and console.logs

//const { default: axios } = require("axios");

// Now you’ll modify the function to make an axios call to SWAPI

// Make an axios request that gets the information about the planet Alderaan (use the search query to request it, the how to on the search query is at the bottom of the Getting Started section of the documentation)

// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

// In the loop, make another get request for each URL in the array.

// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested. Append the h2 to your HTML document.
//document.getElementById("residents").addEventListener("click", function () {
// document.getElementById("para").innerHTML = "button clicked";
//});

const btn = document.querySelector("#btn");
const para = document.getElementById("para");

function display() {
  console.log("button clicked");
  axios
    .get("https://swapi.dev/api/planets/2")
    .then((res) => {
      console.log(res.data);
      console.log(res.data.residents);
      for (let i = 0; i < res.data.residents.length; i++) {
        axios.get(res.data.residents[i]).then((res) => {
          const person = document.createElement("li");
          person.textContent = res.data.name;
          para.appendChild(person);
          console.log(res.data.name);
        });
        console.log(res.data.residents[i]);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

document.getElementById("btn").addEventListener("click", display);
