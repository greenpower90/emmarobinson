import {quotes} from './data/quotes.js';
import { mainPicture } from './data/main-picture.js';

let random = 0;
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

window.onload = loadPictureAndQuote();

function loadPictureAndQuote(){

  //let images = [1,2,3,4,5,6,7,8,9,10,11,12,13,]
  let images = mainPicture;
  console.log(mainPicture);

  let randomImageIndex = Math.floor(Math.random() * images.length)
  console.log(`celkem fotek ${images.length}`);
  console.log(`náhodné číslo na výběr fotky ${randomImageIndex}`);
  console.log(`zdroj fotky na náhodném indexu: ${images[randomImageIndex].src}`)
  

  document.getElementsByTagName('mainpicture')[0].style.backgroundImage = `url(${images[randomImageIndex].src})`;
  document.getElementsByTagName('mainpicture')[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName('mainpicture')[0].style.backgroundSize = "100%";

  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
  return loadPictureAndQuote = random;
}

//přiřazení random number číslo citátu náhodně vybraného při načtení úvodní stránky
random = loadPictureAndQuote;
console.log(`celkem citátů ${quotes.length}`);
console.log(`náhodné číslo na výběr citátu ${random}`);
function nextQuote(){
  //btnn.addEventListener("click", function() {
   // let btnn = document.querySelector("#Nbtn")
    
    random = random + 1;
    random = random % quotes.length;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    console.log(`citát č. ${random}`)
 // })
}

const nextQuoteArrow = document.querySelector('.js-button-citat-right');
nextQuoteArrow.addEventListener('click', () => {
  nextQuote();
});

function previousQuote(){
  //btnn.addEventListener("click", function() {
   // let btnp = document.querySelector("#Pbtn")
    
    random = random - 1;
    random = random % quotes.length;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    console.log(`citát č. ${random}`);
    if (random === 0) { // i would become 0
      random = quotes.length; // so put it at the other end of the array
 // })
    
}

};

const previousQuoteArrow = document.querySelector('.js-button-citat-left');
previousQuoteArrow.addEventListener('click', () => {
  previousQuote();
})
