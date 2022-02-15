//const axios = require('axios');
const input = document.querySelector('#text-input');
const button = document.querySelector('#search-button');
let query;
let resImage;

console.log(input)
console.log(button)

button.addEventListener("click", function() {
  query = input.value
  console.log(query)
  getCard()
});



async function getCard() {
  let response = await axios.get(
    `https://api.scryfall.com/cards/search?q=${query}&pretty=true`
  );
  resImage = response.data.data[0].image_uris.normal;
  console.log("getCard resp=", response.data.data[0].image_uris.small);
  createCard()

}

function createCard() {
  const img = document.querySelector("img");
  img.src = resImage;

  console.log(img)

}
