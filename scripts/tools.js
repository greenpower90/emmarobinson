export function getCurrentArticleIndex(array, currentArticleId){
  let indexMatch = 0
  for(let i=0; i<array.length; i++){
    if(array[i].articleId === currentArticleId){
      indexMatch = i
      break
    }
  }
  return indexMatch
}

export function getCurrentArticleData(array, currentArticleId){
  let articleData
  for(let i=0; i<array.length; i++){
    if(array[i].articleId === currentArticleId){
      articleData = array[i]
      break
    }
  }
  return articleData
}

export function feedIntermezzoHTML(articleOverview){
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