let HTMLelement = '';
let showMoreElement = 1;
overviews.forEach((articleOverview) => {
  HTMLelement += `
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
      <img class="overview-picture" src="${articleOverview.picture}">
    </a>

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
})

console.log(HTMLelement);

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = HTMLelement;
  