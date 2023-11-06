import {quotes} from '../data/quotes.js';
import { loadRandomMainPicture } from '../data/main-picture.js';


let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let randomQuoteIndex = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[randomQuoteIndex].quote;
writer.innerHTML = quotes[randomQuoteIndex].writer;

window.onload = loadRandomMainPicture();





//přiřazení random number číslo citátu náhodně vybraného při načtení úvodní stránky

console.log(`celkem citátů ${quotes.length}`);
console.log(`náhodné číslo na výběr citátu ${randomQuoteIndex}`);
function nextQuote(){
    randomQuoteIndex = randomQuoteIndex + 1;
    randomQuoteIndex = randomQuoteIndex % quotes.length;
    quote.innerHTML = quotes[randomQuoteIndex].quote;
    writer.innerHTML = quotes[randomQuoteIndex].writer;
    quote.innerHTML = quotes[randomQuoteIndex].quote;
    writer.innerHTML = quotes[randomQuoteIndex].writer;
    console.log(`citát č. ${randomQuoteIndex}`)
};



function previousQuote(){
  randomQuoteIndex = randomQuoteIndex - 1;
  randomQuoteIndex = randomQuoteIndex % quotes.length;
  quote.innerHTML = quotes[randomQuoteIndex].quote;
  writer.innerHTML = quotes[randomQuoteIndex].writer;
  console.log(`citát č. ${randomQuoteIndex}`);
  if (randomQuoteIndex === 0) { // i would become 0
    randomQuoteIndex = quotes.length; // so put it at the other end of the array
  }
};

const nextQuoteArrow = document.querySelector('.js-button-citat-right');
nextQuoteArrow.addEventListener('click', () => {
  nextQuote();
});

const previousQuoteArrow = document.querySelector('.js-button-citat-left');
previousQuoteArrow.addEventListener('click', () => {
  previousQuote();
});
