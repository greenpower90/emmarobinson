let random = 0;

const quotes = 
[{
  quote: `"Nic jiného, než energie čisté lásky a radosti nemůže dítěti pomoci v překonáni jeho karmy. Naše bezpodmínečná láska mu umožní pocit , že je plnohodnotným člověkem.."`,
  writer: ``
  },
  {  
  quote: `"Nemohl se mnou mluvit, Nemohl mi nic vysvětlit slovy. Avšak jeho srdce, dokonale živé, plné lásky, kterou mohl dávat a přijímat, z něj činilo bytost žijící plným životem."`,
  writer: `(z knihy Adam boží miláček, Henry J.M.Nouwen)`
  }, 
  {
  quote: `"To nejlepší nelze říci, druhé nejlepší je obvykle špatně chápáno."`,
  writer: `(Bert Hellinger)`
  }, 
  {

  quote: `"Když je v sázce lidská bytost, tak člověk musí být trpělivý a ochotný se ještě učit, protože stát se může cokoliv. Navíc, když je ve hře ještě láska."`,
  writer: `(Tracyho tygr - William Saroyan)`
  }, 
  {

  quote: `"Když je v sázce lidská bytost, tak člověk musí být trpělivý a ochotný se ještě učit, protože stát se může cokoliv. Navíc, když je ve hře ještě láska."`,
  writer: `(Tracyho tygr - William Saroyan)`
  },
  {

  quote: `"Je lepší dělat štěstí, než neštěstí."`,
  writer: ``
  },
  {

  quote: `"Trápení něhou povolí"`,
  writer: ``
  },
  {

  quote: `"Na otázku utrpení neexistuje odpověď intelektuální, ale pouze existenciální  - tedy odpověď samotným žitím"`,
  writer: `(Petr Tavel)`
  },
  {

  quote: `"Naděje je nakažlivá"`,
  writer: `(Jane Goodall, Kniha o naději)`
  },
  {

  quote: `"Být pochopen je jedna z nejvyšších forem intimity."`,
  writer: ``
  },
  {

  quote: `"Mylně věříme, že odvaha vyžaduje oběti. Ve skutečnosti, však největší oběť vyžaduje zbabělost."`,
  writer: `(Odvážné snění - Albert Villoldo)`
  },
  {

  quote: `"Sebeúcta není ničím, čeho bychom mohli dosáhnout tvrdou prací, nýbrž je to trvalá ochota setkat se se životem čelem. Sebeúcta je schopnost říci: Na tohle mám. Mám, co si život žádá"`,
  writer: ``
  },
  {

  quote: `"DOMOV  je tam, kde přijímají vaše dary."`,
  writer: ``
  },
  {

  quote: `"Omezeni navenek vždy vyvolá pohyb uvnitř."`,
  writer: ``
  },
]



let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

window.onload = loadPictureAndQuote();

function loadPictureAndQuote(){
 /* let images = 
  ['Images/1.jpg', 
    'Images/2.jpg', 
    'Images/3.jpg', 
    'Images/4.jpg', 
    'Images/5.jpg', 
    'Images/6.jpg', 
    'Images/7.jpg',
    'Images/8.jpg',
    'Images/9.jpg',
    'Images/10.jpg',
    'Images/11.jpg',
    'Images/12.jpg',
    'Images/13.jpg'
  ];

  */

let images = [1,2,3,4,5,6,7,8,9,10,11,12,13,]

//var image = images[Math.floor(Math.random() * images.length)];
let image = Math.floor(Math.random() * images.length)
console.log(image);
//if zamezuje načtení fotky s označením 0, taková ve složce není.
if (image === 0) { 
  image = 1;
 console.log(image);
}


//document.getElementsByTagName('mainpicture')[0].style.backgroundImage = "url('" + image + "')";
document.getElementsByTagName('mainpicture')[0].style.backgroundImage = "url('Images/" + image + ".jpg')";
document.getElementsByTagName('mainpicture')[0].style.backgroundRepeat = "no-repeat";
document.getElementsByTagName('mainpicture')[0].style.backgroundSize = "100%";





//code for next/previous quoute button);


let random = Math.floor(Math.random() * quotes.length);
quote.innerHTML = quotes[random].quote;
writer.innerHTML = quotes[random].writer;
return loadPictureAndQuote = random;
}

console.log(loadPictureAndQuote);
console.log(random);

//přiřazení random number číslo citátu náhodně vybraného při načtení úvodní stránky
random = loadPictureAndQuote;

function nextQuote(){
  //btnn.addEventListener("click", function() {
   // let btnn = document.querySelector("#Nbtn")
    
    random = random + 1;
    random = random % quotes.length;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
 // })
}

function previousQuote(){
  //btnn.addEventListener("click", function() {
   // let btnp = document.querySelector("#Pbtn")
    
    random = random - 1;
    random = random % quotes.length;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    if (random === 0) { // i would become 0
      random = quotes.length; // so put it at the other end of the array
 // })
}

}

/*
  btnp.addEventListener("click", function() {
    random = random - 1;
    random = random % quotes.length;
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
    if (random === 0) { // i would become 0
      random = quotes.length; // so put it at the other end of the array
  }
  quote.innerHTML = quotes[random].quote;
  writer.innerHTML = quotes[random].writer;
  })

  */