
let headerElement = '';
let pageTitleElement = '';
let articleTitle = document.querySelector('.js-title').innerHTML;
console.log(articleTitle);



overviews.forEach((articleData, index) => {
    if(articleData.title === articleTitle){
      pageTitleElement = articleData.title;
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
          <a href="../${articleData.cathegory.link}">
            <div class="header-home-container">  
              <p>${articleData.cathegory.name}</p>
            </div>
          </a>
          <div class="header-home-container" style="width: 15px;"><img style="width: 100%;padding-left: 5px;" src="/icons/shark.png" ></div>
        </div>
        <div class="header-part">
          <a href="../${articleData.articleLink}">
            <div class="header-home-container"> 
              <p>${articleData.title}</p>
            </div>
          </a>
        </div>         

      </div>
      `
    } else{return};
    
})


if(headerElement === ''){
  
}else {document.querySelector('.header').innerHTML = headerElement;

}

console.log(headerElement);
document.title = pageTitleElement;
