export const quotes = 
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
  {
  quote: `"Bez jedinýho slova tě naučim všechno, co potřebuješ vědět o tomto světě."`,
  writer: `Kuba z Duba`
    },
]



export function nextQuote(randomQuoteIndex, quote, writer){
  //btnn.addEventListener("click", function() {
   // let btnn = document.querySelector("#Nbtn")
    
    randomQuoteIndex = randomQuoteIndex + 1;
    randomQuoteIndex = randomQuoteIndex % quotes.length;
    quote.innerHTML = quotes[randomQuoteIndex].quote;
    writer.innerHTML = quotes[randomQuoteIndex].writer;
    quote.innerHTML = quotes[randomQuoteIndex].quote;
    writer.innerHTML = quotes[randomQuoteIndex].writer;
    console.log(`citát č. ${randomQuoteIndex}`)
 // })
};

export function previousQuote(randomQuoteIndex, quote, writer){
  //btnn.addEventListener("click", function() {
   // let btnp = document.querySelector("#Pbtn")
    
    randomQuoteIndex = randomQuoteIndex - 1;
    randomQuoteIndex = randomQuoteIndex % quotes.length;
    quote.innerHTML = quotes[randomQuoteIndex].quote;
    writer.innerHTML = quotes[randomQuoteIndex].writer;
    console.log(`citát č. ${randomQuoteIndex}`);
    if (randomQuoteIndex === 0) { // i would become 0
      randomQuoteIndex = quotes.length; // so put it at the other end of the array
    }
};