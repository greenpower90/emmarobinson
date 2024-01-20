import { overviews } from '../data/overviews-data.js';
import { currentArticleIndex } from './next-previous-articles.js';


let headerElement = '';
//let articleTitle = document.querySelector('.js-title').innerHTML;

headerElement += `
      <div class="header-container" >
        <div class="header-part">
          <a href="../index.html">
            <div class="header-home-container"> 
              <img class="home-icon" src="../icons/home.png"> 
              <p>Home</p>
            </div>
          </a>
          <div class="header-home-container" style="width: 15px;"><img style="width: 100%; padding-left: 5px; padding-right: 5px;" src="/icons/shark.png" ></div>
        </div>
        <div class="header-part">
          <a href="../${overviews[currentArticleIndex].cathegory.link}">
            <div class="header-home-container">  
              <p>${overviews[currentArticleIndex].cathegory.name}</p>
            </div>
          </a>
          <div class="header-home-container" style="width: 15px;"><img style="width: 100%;padding-left: 5px;" src="/icons/shark.png" ></div>
        </div>
        <div class="header-part">
          <a href="../${overviews[currentArticleIndex].articleLink}">
            <div class="header-home-container"> 
              <p>${overviews[currentArticleIndex].title}</p>
            </div>
          </a>
        </div>         

      </div>
      `

if(headerElement === ''){
  
}else {document.querySelector('.header').innerHTML = headerElement;

}

console.log(overviews[currentArticleIndex].date);
document.querySelector('.js-date-of-article')
  .innerHTML = overviews[currentArticleIndex].date;

document.title = overviews[currentArticleIndex].title;

