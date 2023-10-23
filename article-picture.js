const allPictures = document.querySelectorAll('.js-picture');


  allPictures.forEach((picture, index) => {
    console.log(index);
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

      console.log(index);



      let nextButtonElement = document.querySelector('.js-next-button');
      nextButtonElement.addEventListener('click', () => {
        console.log(index);
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
  })

 



/*

pictureElement.addEventListener('click', (src)=>{
  //nastavení DIV
  let backgroundElement = document.getElementById("js-imagePopup-div");
  backgroundElement.style.display = "block";
  document.body.style.overflow = "hidden";

  //nastavení fotky
  let showPictureElement = document.getElementById("popupImage");
  showPictureElement.src = pictureElement.src;
})

*/

/*

pictureElement.addEventListener('click', (src)=>{
  //nastavení DIV
  let backgroundElement = document.getElementById("js-imagePopup-div");
  backgroundElement.style.display = "block";
  document.body.style.overflow = "hidden";

  //nastavení fotky
  let showPictureElement = document.getElementById("popupImage");
  showPictureElement.src = pictureElement.src;
})
*/


// function to show image when we click on a image
/*
function showImage(imageSrc) {
  
  //nastavení DIV
  let imagePopup = document.getElementById("js-background-div");
  imagePopup.style.display = "block";
  document.body.style.overflow = "hidden";
  
  //nastavení fotky
  let popupImage = document.getElementById("popupImage");
  popupImage.src = imageSrc;
  }
*/

  // function to hide the image when we click on cross button
  function closeImageButton() {
  let imagePopup = document.getElementById("js-background-div");
  imagePopup.style.display = "none";
  document.body.style.overflow = "auto";
  }
