import { gallery } from "../data/gallery-data.js";



let galleryGridElement = document.querySelector('.js-gallery-grid');

//vytvoření HTML pro všechny fotky z gallery-data.js
let galleryHTML = '';

gallery.forEach((picture) => {
  galleryHTML += `
      <img class="gallery-img js-picture ${picture.dimension.spanRow} ${picture.dimension.spanCollumn}" 
      style="width: 100%; height:100%; style="object-fit: cover; "
      src="${picture.fileLocation.small}"
      alt="${picture.alt}"
      data-full-picture="${picture.fileLocation.full}"
      id=${picture.id}>
  `;
});
galleryGridElement.innerHTML = galleryHTML;


const allPictures = document.querySelectorAll('.js-picture');

allPictures.forEach((picture, index) => {
  
  picture.addEventListener('click', () => {
    let resetIndex = index;

    console.log(`index z řady fotek .js-picture ${index}`)
    
    //po kliknutí na jakoukoliv fotku se vytvoří tmavé pozadí přes celou stránku
    let backgroundElement = document.getElementById("js-background-div");
    backgroundElement.style.display = "block";
    document.body.style.overflow = "hidden";
    backgroundElement.innerHTML = `
    <span class="close-button js-close-button">×</span>
    <span class="picture-next-button js-next-button"><img style="width: 40px" src="../icons/next.ico"></span>
    <span class="picture-previous-button js-previous-button"><img style="width: 40px" src="../icons/previous.ico"></span>
    <img src="${picture.dataset.fullPicture}" alt="Popup Image" id="popupImage">
    `;

    //a zobrazí se příslušná fotka
    let showPictureElement = document.getElementById("popupImage");
    //showPictureElement.src = picture.src
    //showPictureElement.src = gallery[index].fileLocation.full;

    let nextButtonElement = document.querySelector('.js-next-button');
    nextButtonElement.addEventListener('click', () => {
      if(index === allPictures.length -1){
        index = 0;
        console.log(index);
        showPictureElement.src = gallery[index].fileLocation.full;
      }
      else{ 
      index++;
      console.log(index);
      showPictureElement.src = gallery[index].fileLocation.full;
      };
    });

    let previousButtonElement = document.querySelector('.js-previous-button');
    previousButtonElement.addEventListener('click', () => {
      if(index === 0){
        index = allPictures.length -1;
        console.log(index);
        showPictureElement.src = gallery[index].fileLocation.full;
      }
      else{
      index--;
      console.log(index);
      showPictureElement.src = gallery[index].fileLocation.full
      }
    });

    let closeImageButton = document.querySelector('.js-close-button');
    closeImageButton.addEventListener('click', () => {
      let imagePopup = document.getElementById("js-background-div");
      imagePopup.style.display = "none";
      document.body.style.overflow = "auto";
      index = resetIndex;
    });
    // function to hide the image when we click on cross button
  });
  
  
  


});





