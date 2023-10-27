import { overviews } from '../data/overviews-data.js';
import { currentArticle } from './next-previous-articles.js';


let headerElement = '';
let pageTitleElement = '';
let articleTitle = document.querySelector('.js-title').innerHTML;

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
          <a href="../${overviews[currentArticle].cathegory.link}">
            <div class="header-home-container">  
              <p>${overviews[currentArticle].cathegory.name}</p>
            </div>
          </a>
          <div class="header-home-container" style="width: 15px;"><img style="width: 100%;padding-left: 5px;" src="/icons/shark.png" ></div>
        </div>
        <div class="header-part">
          <a href="../${overviews[currentArticle].articleLink}">
            <div class="header-home-container"> 
              <p>${overviews[currentArticle].title}</p>
            </div>
          </a>
        </div>         

      </div>
      `

if(headerElement === ''){
  
}else {document.querySelector('.header').innerHTML = headerElement;

}

//console.log(headerElement);
document.title = pageTitleElement;
