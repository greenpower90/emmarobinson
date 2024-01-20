import { overviews } from '../data/overviews-data.js';
import { feedArticleOverviewHTML } from './articles-overview.js'

let vzkazyHTMLelement = ''

overviews.forEach((articleOverview, index) => {
    if(articleOverview.cathegory.id === 'vzkazy'){
      console.log('vzkazy'+index);
      vzkazyHTMLelement += feedArticleOverviewHTML(articleOverview)
      } else{return}
})

document.querySelector('.js-articles-bottom-left-grid')
  .innerHTML = vzkazyHTMLelement