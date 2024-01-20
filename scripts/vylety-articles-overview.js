import { overviews } from '../data/overviews-data.js';
import { feedArticleOverviewHTML } from './articles-overview.js'

let vyletyHTMLelement = ''

overviews.forEach((articleOverview, index) => {
    if(articleOverview.cathegory.id === 'vylety'){
      vyletyHTMLelement += feedArticleOverviewHTML(articleOverview)
    } else{return}
    
})

console.log(vyletyHTMLelement);

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = vyletyHTMLelement