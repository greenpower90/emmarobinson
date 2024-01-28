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