const quotes = [{
  quote: `"Nic jiného, než energie čisté lásky a radosti nemůže dítěti pomoci v překonáni jeho karmy. Naše bezpodmínečná láska mu umožní pocit , že je plnohodnotným člověkem.."`,
  writer: ``
}, {
  quote: `"Nemohl se mnou mluvit, Nemohl mi nic vysvětlit slovy. Avšak jeho srdce, dokonale živé, plné lásky, kterou mohl dávat a přijímat, z něj činilo bytost žijící plným životem."`,
  writer: `– (z knihy Adam boží miláček, Henry J.M.Nouwen)`
}, {
  quote: `"To nejlepší nelze říci, druhé nejlepší je obvykle špatně chápáno."`,
  writer: `– (Bert Hellinger)`
}, {

  quote: `"Když je v sázce lidská bytost, tak člověk musí být trpělivý a ochotný se ještě učit, protože stát se může cokoliv. Navíc, když je ve hře ještě láska."`,
  writer: `– (Tracyho tygr - William Saroyan )`
}, 
 ]





let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");




//

// window.onload = function (){
 // let random = Math.floor(Math.random() * quotes.length);
  
 // quote.innerHTML = quotes[random].quote;

//  writer.innerHTML = quotes[random].writer;
// } 

btn.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  
  
  quote.innerHTML = quotes[random].quote;

  
  writer.innerHTML = quotes[random].writer;
})