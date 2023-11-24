import { overviews } from '../data/overviews-data.js';

//načtení ID z článku pomocí js-article-id
let articleId='';

document.querySelectorAll('.js-article-id')
  .forEach((clanek) => {
    articleId = clanek.dataset.articleId;
  });

console.log(`ID is: ${articleId}`);


//určení indexu aktuálně otevřeného článku pomocí ID prohledání dat overviews
let currentArticle;
let currentArticleData;

overviews.forEach((article, index) => {
  if(article.articleId === articleId){
    currentArticle = index;
    currentArticleData = article;
    console.log('currentArticle ' + currentArticle)
  }
});

//přiřazení "alt" k úvodnímu obrázku 
document.querySelector('.article-top-picture').alt=currentArticleData.pictureAlt;

//zjištění indexů, které nejsou intermezzo
let overviewsNonIntermezzo = [];
overviews.forEach((article, index) => {
  if(article.type === 'intermezzo'){
    return;
  } else {
    overviewsNonIntermezzo.push(index);
  }

});
console.log(`články bez intermezzo: ${overviewsNonIntermezzo}`);





//Přiřazení indexů pro následující a předchozí článek pomocí overviewsNonIntermezzo pro přeskočení intermezzo, který vlastní kartu nemají

let nextArticleLinkIndex;
let previousArticleLinkIndex ;

overviewsNonIntermezzo.forEach((array, index) => {
  if(array === currentArticle){
    nextArticleLinkIndex = overviewsNonIntermezzo[index-1];
    previousArticleLinkIndex = overviewsNonIntermezzo[index+1];
    console.log(`nextIndex ${nextArticleLinkIndex}`);
    console.log(`previoustIndex ${previousArticleLinkIndex}`)

  }
})



//vytvoření a zobrazení linků na další a předchozí článek
console.log('currentArticle ' + currentArticle);
console.log((overviewsNonIntermezzo[overviewsNonIntermezzo.length -1]));

if(currentArticle === (overviewsNonIntermezzo[overviewsNonIntermezzo.length -1])){
  document.querySelector('.js-previous-article')
  .innerHTML = '';
  console.log('end of array')
}else{
  document.querySelector('.js-previous-article')
  .innerHTML = `
  <p class="next-previous-article-text">předchozí článek</p>
  <a class="previous-article" href="../${overviews[previousArticleLinkIndex].articleLink}">
    
    <p>${overviews[previousArticleLinkIndex].title}</p>
  </a>
  `;
}


if(currentArticle === overviewsNonIntermezzo[0]){
  document.querySelector('.js-next-article')
  .innerHTML = '';
}else{
  document.querySelector('.js-next-article')
  .innerHTML = `
    <p class="next-previous-article-text">další článek</p>
    <a class="next-article" href="../${overviews[nextArticleLinkIndex].articleLink}">
    
    <p>${overviews[nextArticleLinkIndex].title}</p>
  
  </a>
  `;
}

