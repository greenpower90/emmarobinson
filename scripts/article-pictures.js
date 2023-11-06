const allPictures = document.querySelectorAll('.js-picture');



allPictures.forEach((picture, index) => {
  picture.addEventListener('click', () => {
    let pictureIndex = index;
    //po kliknutí na jakoukoliv fotku se vytvoří tmavé pozadí přes celou stránku
    let backgroundElement = document.getElementById("js-background-div");
    backgroundElement.style.display = "block";
    document.body.style.overflow = "hidden";
    backgroundElement.innerHTML = `
    <span class="close-button js-close-button">×</span>
    <span class="picture-next-button js-next-button"><img style="width: 40px" src="../icons/next.ico"></span>
    <span class="picture-previous-button js-previous-button"><img style="width: 40px" src="../icons/previous.ico"></span>
    <img src="" alt="Popup Image" id="popupImage">
    `

    //a zobrazí se příslušná fotka
    let showPictureElement = document.getElementById("popupImage");
    showPictureElement.src = picture.src;

    document.querySelector('.js-close-button')
      .addEventListener('click', () => {
        closeImageButton();
        
      });

    document.querySelector('.js-next-button')
      .addEventListener('click', () => {
        if(pictureIndex === allPictures.length -1){
          pictureIndex = 0;
          showPictureElement.src = allPictures[pictureIndex].src;
        }else{
        pictureIndex++;
        showPictureElement.src = allPictures[pictureIndex].src;
        }
      });

    document.querySelector('.js-previous-button')
      .addEventListener('click', () => {
        if(pictureIndex === 0){
          pictureIndex = allPictures.length -1;
          showPictureElement.src = allPictures[pictureIndex].src;
        }
        else{
        pictureIndex--;
        console.log(pictureIndex);
        showPictureElement.src = allPictures[pictureIndex].src
        }
      });
    });
});

// function to hide the image when we click on cross button
function closeImageButton() {
  let backgroundElement = document.getElementById("js-background-div");
  backgroundElement.style.display = "none";
  document.body.style.overflow = "auto";
}