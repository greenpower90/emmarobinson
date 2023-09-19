window.onload = function (){
  var images = 
 ['Images/1.jpg', 
  'Images/2.jpg', 
  'Images/3.jpg', 
  'Images/4.jpg', 
  'Images/5.jpg', 
  'Images/6.jpg', 
  'Images/7.png',
  'Images/8.jpg'
];
const quotes = [{
  quote: `"Nic jiného, než energie čisté lásky a radosti nemůže dítěti pomoci v překonáni jeho karmy. Naše bezpodmínečná láska mu umožní pocit , že je plnohodnotným člověkem.."`,
  writer: ``
}, {
  quote: `"Nemohl se mnou mluvit, Nemohl mi nic vysvětlit slovy. Avšak jeho srdce, dokonale živé, plné lásky, kterou mohl dávat a přijímat, z něj činilo bytost žijící plným životem."`,
  writer: `(z knihy Adam boží miláček, Henry J.M.Nouwen)`
}, {
  quote: `"To nejlepší nelze říci, druhé nejlepší je obvykle špatně chápáno."`,
  writer: `(Bert Hellinger)`
}, {

  quote: `"Když je v sázce lidská bytost, tak člověk musí být trpělivý a ochotný se ještě učit, protože stát se může cokoliv. Navíc, když je ve hře ještě láska."`,
  writer: `(Tracyho tygr - William Saroyan)`
}, 
 ]

 let btn = document.querySelector("#Qbtn");

let quote = document.querySelector(".quote");

let writer = document.querySelector(".writer");

  var image = images[Math.floor(Math.random() * images.length)];
  document.getElementsByTagName('mainpicture')[0].style.backgroundImage = "url('" + image + "')";
  document.getElementsByTagName('mainpicture')[0].style.backgroundRepeat = "no-repeat";
  document.getElementsByTagName('mainpicture')[0].style.backgroundSize = "100%";
  
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
  
  btn.addEventListener("click", function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
  })

}

  