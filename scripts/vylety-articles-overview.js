
let vyletyHTMLelement = '';



console.log('start');

overviews.forEach((articleOverview, index) => {
    if(articleOverview.cathegory.id === 'vylety'){
      vyletyHTMLelement += `
      <div class="article-container ${articleOverview.dimension}${articleOverview.class}">
    
        <div class="article-container-top">
          <a href="${articleOverview.cathegory.link}">
            <div class="category">${articleOverview.cathegory.name}</div>
          </a>
          <div class="author-and-date-container">
            <div class="date-of-article">${articleOverview.date}</div>
          </div>
        </div>
    
        <img class="overview-picture" src="${articleOverview.picture}">
    
        <a href="${articleOverview.articleLink}" >
          <div class="article-title">${articleOverview.title}</div>
        </a>
    
        <a class="article-overview"  href="${articleOverview.articleLink}">
          <div class="article-overview">
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
    } else{return};
    
})

console.log(vyletyHTMLelement);

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = vyletyHTMLelement;