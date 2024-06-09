import { galleryJanaPlavec } from "../data/gallery-data.js";
import { feedGallery } from "./gallery-script.js";
import { galleryPicturesManipulation } from "./gallery-script.js";

let galleryGridElement = document.querySelector('.js-gallery-grid');

galleryGridElement.innerHTML = feedGallery(galleryJanaPlavec)
const allPictures = document.querySelectorAll('.js-picture');
galleryPicturesManipulation(allPictures, galleryJanaPlavec)