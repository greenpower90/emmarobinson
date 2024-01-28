import { currentArticleData } from './next-previous-articles.js'


let headerElement = `
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
          <a href="../${currentArticleData.cathegory.link}">
            <div class="header-home-container">  
              <p>${currentArticleData.cathegory.name}</p>
            </div>
          </a>
          <div class="header-home-container" style="width: 15px;"><img style="width: 100%;padding-left: 5px;" src="/icons/shark.png" ></div>
        </div>
        <div class="header-part">
          <a href="../${currentArticleData.articleLink}">
            <div class="header-home-container"> 
              <p>${currentArticleData.title}</p>
            </div>
          </a>
        </div>         

      </div>
      `

document.querySelector('.header').innerHTML = headerElement