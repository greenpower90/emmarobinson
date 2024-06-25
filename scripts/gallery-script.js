//import { gallery } from "../data/gallery-data.js";



//let galleryGridElement = document.querySelector('.js-gallery-grid');

//vytvoření HTML pro všechny fotky z gallery-data.js


export function feedGallery(galleryArray){
  let galleryHTML = '';
  galleryArray.forEach((picture) => {
    galleryHTML += `
        <img class="gallery-img js-picture ${picture.dimension.spanRow} ${picture.dimension.spanCollumn}" 
        style="width: 100%; height:100%; style="object-fit: cover; "
        src="${picture.fileLocation.small}"
        alt="${picture.alt}"
        data-full-picture="${picture.fileLocation.full}"
        id=${picture.id}>
    `;
  });
  return galleryHTML
}

export function galleryPicturesManipulation(pictures, galleryData){//akce po kliknutí na obrázek-pozadi, zobrazeni fotky, manipulacni tlacitka next previous a close
  pictures.forEach((picture, index) => {
    
    picture.addEventListener('click', () => {
      let resetIndex = index;

      console.log(`reset index: ${resetIndex}`)
      console.log(`index z řady fotek .js-picture ${index}`)
      
      //po kliknutí na jakoukoliv fotku se vytvoří tmavé pozadí přes celou stránku
      let backgroundElement = document.getElementById("js-background-div");
      backgroundElement.style.display = "block";
      document.body.style.overflow = "hidden";
      backgroundElement.innerHTML = `
      <span class="close-button js-close-button">×</span>
      <span class="picture-next-button js-next-button"><img style="width: 40px" src="../icons/next.ico"></span>
      <span class="picture-previous-button js-previous-button"><img style="width: 40px" src="../icons/previous.ico"></span>
      <img src="${galleryData[index].fileLocation.full}" alt="Popup Image" id="popupImage">
      `;

      //a zobrazí se příslušná fotka
      let showPictureElement = document.getElementById("popupImage");
      //showPictureElement.src = picture.src
      //showPictureElement.src = gallery[index].fileLocation.full;

      let nextButtonElement = document.querySelector('.js-next-button');
      nextButtonElement.addEventListener('click', () => {
        if(index === pictures.length -1){
          index = 0;
          console.log(`reset index: ${resetIndex}`)
          console.log(`index z řady fotek .js-picture ${index}`)
          showPictureElement.src = galleryData[index].fileLocation.full;
        }
        else{ 
        index++;
        console.log(`reset index: ${resetIndex}`)
        console.log(`index z řady fotek .js-picture ${index}`)
        showPictureElement.src = galleryData[index].fileLocation.full;
        };
      });

      // document.addEventListener("keydown", (e)=>{ 
      //   if (e.key === "n"){
      //     if(index === pictures.length -1){
      //       index = 0;
      //       console.log(index);
      //       showPictureElement.src = galleryData[index].fileLocation.full;
      //     }
      //     else{ 
      //     index++;
      //     console.log(index);
      //     showPictureElement.src = galleryData[index].fileLocation.full;
      //     };
      //   }
      // })

  
      let previousButtonElement = document.querySelector('.js-previous-button');
      previousButtonElement.addEventListener('click', () => {
        if(index === 0){
          index = pictures.length -1;
          console.log(index);
          showPictureElement.src = galleryData[index].fileLocation.full;
        }
        else{
        index--;
        console.log(index);
        showPictureElement.src = galleryData[index].fileLocation.full
        }
      });
  
      let closeImageButton = document.querySelector('.js-close-button');
      closeImageButton.addEventListener('click', () => {
        let imagePopup = document.getElementById("js-background-div");
        imagePopup.style.display = "none";
        document.body.style.overflow = "auto";
        index = resetIndex;
        console.log(`reset index: ${resetIndex}`)
        console.log(`index z řady fotek .js-picture ${index}`)
      });
      // function to hide the image when we click on cross button
    })

    

  })
}

//galleryGridElement.innerHTML = feedGallery(gallery)
//const allPictures = document.querySelectorAll('.js-picture');
//galleryPicturesManipulation(allPictures)






