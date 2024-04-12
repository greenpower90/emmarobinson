import { overviews } from '../data/overviews-data.js';
import { feedIntermezzoHTML } from './tools.js';
import { feedArticleOverviewHTML } from './tools.js';

//start - code for showing articles content after scroll to y=500
const showContent = document.querySelector(".bottom-part-main-grid")
let showGrid = false

window.addEventListener("scroll", ()=>{
  if(!showGrid){
    if(window.scrollY > 500){
      showGrid = true
      showContent.style.opacity = "1"
    }
  }
  else if(window.scrollY < 500){
    showGrid = false
    showContent.style.opacity = "0"
  }
})
//end of section



//start - code for creating HTML for all articles
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

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = feedOverviewsHTML(overviews)
//end
