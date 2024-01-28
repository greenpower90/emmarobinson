import { overviews, nonIntermezzoOverviews } from '../data/overviews-data.js';
import { getCurrentArticleIndex, getCurrentArticleData } from './tools.js';


//načtení ID z článku pomocí js-article-id
let currentArticleId = document.querySelector('.js-article-id').dataset.articleId

//určení indexu a dat aktuálně otevřeného článku pomocí ID prohledání dat overviews
export let currentArticleIndex = getCurrentArticleIndex(nonIntermezzoOverviews, currentArticleId)
export let currentArticleData = getCurrentArticleData(nonIntermezzoOverviews, currentArticleId)

//přiřazení title
document.title = currentArticleData.title

//přiřazení alt k úvodnímu obrázku
document.querySelector('.article-top-picture').alt=currentArticleData.pictureAlt;

//přiřazení datumu pod článek
document.querySelector('.js-date-of-article').innerHTML = currentArticleData.date


//vytvoření HTML pro další/předchozí článek
if(currentArticleIndex === (nonIntermezzoOverviews.length -1)){
  document.querySelector('.js-previous-article')
  .innerHTML = ''
}else{
  let previousArticleLinkIndex = currentArticleIndex + 1
  document.querySelector('.js-previous-article')
  .innerHTML = `
  <p class="next-previous-article-text">předchozí článek</p>
  <a class="previous-article" href="../${nonIntermezzoOverviews[previousArticleLinkIndex].articleLink}">
    <p>${nonIntermezzoOverviews[previousArticleLinkIndex].title}</p>
  </a>
  `
}


if(currentArticleIndex === 0){
  document.querySelector('.js-next-article')
  .innerHTML = ''
}else{
  let nextArticleLinkIndex = currentArticleIndex - 1
  document.querySelector('.js-next-article')
  .innerHTML = `
    <p class="next-previous-article-text">další článek</p>
    <a class="next-article" href="../${nonIntermezzoOverviews[nextArticleLinkIndex].articleLink}">
      <p>${nonIntermezzoOverviews[nextArticleLinkIndex].title}</p>
    </a>
  `
}

