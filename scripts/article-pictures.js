const allPictures = document.querySelectorAll('.js-picture');

allPictures.forEach((picture, index) => {
  picture.addEventListener('click', () => {
    //po kliknutí na jakoukoliv fotku se vytvoří tmavé pozadí přes celou stránku
    let backgroundElement = document.getElementById("js-background-div");
    backgroundElement.style.display = "block";
    document.body.style.overflow = "hidden";
    backgroundElement.innerHTML = `
    <span class="close-button" onclick="closeImageButton()">×</span>
    <span class="picture-next-button js-next-button"><img style="width: 40px" src="../icons/next.ico"></span>
    <span class="picture-previous-button js-previous-button"><img style="width: 40px" src="../icons/previous.ico"></span>
    <img src="" alt="Popup Image" id="popupImage">
    `

    //a zobrazí se příslušná fotka
    let showPictureElement = document.getElementById("popupImage");
    showPictureElement.src = picture.src

    let nextButtonElement = document.querySelector('.js-next-button');
    nextButtonElement.addEventListener('click', () => {
      if(index === allPictures.length -1){
        index = 0;
        console.log(index);
        showPictureElement.src = allPictures[index].src;
        showPictureElement.addEventListener('animationend', onAnimationEnd);
      }
      else{
      console.log(index);
      showPictureElement.src = allPictures[index+1].src
      index++;
      console.log(picture.src);
      }
    })

    let previousButtonElement = document.querySelector('.js-previous-button');
    previousButtonElement.addEventListener('click', () => {
      console.log(index);
      if(index === 0){
        index = allPictures.length -1;
        console.log(index);
        showPictureElement.src = allPictures[index].src;
      }
      else{
      console.log(index);
      showPictureElement.src = allPictures[index-1].src
      index--;
      console.log(picture.src);
      }
    })
  })
});

  // function to hide the image when we click on cross button
function closeImageButton() {
  let imagePopup = document.getElementById("js-background-div");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
}
