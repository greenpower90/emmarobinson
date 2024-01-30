import { overviews } from '../data/overviews-data.js';


function feedOverviewsHTML(overviews){
  let HTMLelement = '';
  overviews.forEach((articleOverview) => {
    if(articleOverview.type === 'intermezzo'){
      HTMLelement += feedIntermezzoHTML(articleOverview)
    }
    else{
      HTMLelement += feedArticleOverviewHTML(articleOverview)
    }
  })
  return HTMLelement
}


function feedIntermezzoHTML(articleOverview){
  const { dimension, title, text } = articleOverview

  let intermezzoHTML = `
  <div class="article-container ${dimension}${articleOverview.class}">
    <div class="article-title">${title}</div>
    <div class="article-overview">
      ${text}
    </div>
  </div>
  `
  return intermezzoHTML
}


export function feedArticleOverviewHTML(articleOverview){
  const { dimension, cathegory, date, articleLink, picture, pictureAlt, title, text, readMore} = articleOverview
  let articleOverviewHTML = `
  <div class="article-container ${dimension}${articleOverview.class}">

    <div class="article-container-top">
      <a href="${cathegory.link}">
        <div class="category">${cathegory.name}</div>
      </a>
      <div class="author-and-date-container">
        <div class="date-of-article">${date}</div>
      </div>
    </div>

    <a href="${articleLink}">
      <img class="overview-picture" 
      src="${picture}"
      alt="${pictureAlt}"
      >
    </a>

    <a href="${articleLink}" >
      <div class="article-title">${title}</div>
    </a>

    <a class="article-overview"  href="${articleLink}">
      <div class="article-overview cursor-pointer">
        ${text}
      </div>
    </a>

    <div class="continue-reading-container">
      <a href="${articleLink}" >
        <div class="continue-reading-link">${readMore}</div>
      </a>
    </div>

  </div>
  ` 
  return articleOverviewHTML
}

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = feedOverviewsHTML(overviews)
  
