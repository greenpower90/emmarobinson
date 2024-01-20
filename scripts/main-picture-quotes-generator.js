import {quotes} from '../data/quotes.js';
import { loadRandomMainPicture } from '../data/main-picture.js';

//načtení main picture - POZN - Nemuselo by to být ve stejném kśu s citátem.
window.onload = loadRandomMainPicture()

//taking control of html divs related to quotes.
const quote = document.querySelector(".quote")
const writer = document.querySelector(".writer")
const nextQuoteArrow = document.querySelector('.js-button-citat-right')
const previousQuoteArrow = document.querySelector('.js-button-citat-left')

//Next and Previous buttons event listeners
nextQuoteArrow.addEventListener('click', ()=>{nextQuote()})
previousQuoteArrow.addEventListener('click', ()=>{previousQuote()})

//Generating random index
let randomQuoteIndex = Math.floor(Math.random() * quotes.length)

//render HTML of quote
renderQuote(randomQuoteIndex)


function renderQuote(index){
  quote.innerHTML = quotes[index].quote
  writer.innerHTML = quotes[index].writer
}

//functions to control
function nextQuote(){
    randomQuoteIndex = randomQuoteIndex + 1;
    randomQuoteIndex = randomQuoteIndex % quotes.length;
    renderQuote(randomQuoteIndex)
    console.log(`citát č. ${randomQuoteIndex}`)
};


function previousQuote(){
  if (randomQuoteIndex === 0) {
    randomQuoteIndex = quotes.length-1;
  }else{
    randomQuoteIndex = randomQuoteIndex - 1;
    randomQuoteIndex = randomQuoteIndex % quotes.length;
  }
  renderQuote(randomQuoteIndex)
  console.log(`citát č. ${randomQuoteIndex}`)
}