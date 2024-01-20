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
  let intermezzoHTML = `
  <div class="article-container ${articleOverview.dimension}${articleOverview.class}">
    <div class="article-title">${articleOverview.title}</div>
    <div class="article-overview">
      ${articleOverview.text}
    </div>
  </div>
  `
  return intermezzoHTML
}


export function feedArticleOverviewHTML(articleOverview){
   let articleOverviewHTML = `
    <div class="article-container ${articleOverview.dimension}${articleOverview.class}">

      <div class="article-container-top">
        <a href="${articleOverview.cathegory.link}">
          <div class="category">${articleOverview.cathegory.name}</div>
        </a>
        <div class="author-and-date-container">
          <div class="date-of-article">${articleOverview.date}</div>
        </div>
      </div>
      <a href="${articleOverview.articleLink}">
        <img class="overview-picture" 
        src="${articleOverview.picture}"
        alt="${articleOverview.pictureAlt}"
        >
      </a>

      <a href="${articleOverview.articleLink}" >
        <div class="article-title">${articleOverview.title}</div>
      </a>

      <a class="article-overview"  href="${articleOverview.articleLink}">
        <div class="article-overview cursor-pointer">
          ${articleOverview.text}
        </div>
      </a>

      <div class="continue-reading-container">
        <a href="${articleOverview.articleLink}" >
          <div class="continue-reading-link">${articleOverview.readMore}</div>
        </a>
      </div>

    </div>
    ` 
    return articleOverviewHTML
}

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = feedOverviewsHTML(overviews)
  
