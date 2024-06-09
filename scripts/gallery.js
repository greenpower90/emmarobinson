import { gallery } from "../data/gallery-data.js";
import { feedGallery } from "./gallery-script.js";
import { galleryPicturesManipulation } from "./gallery-script.js";

let galleryGridElement = document.querySelector('.js-gallery-grid');

galleryGridElement.innerHTML = feedGallery(gallery)
const allPictures = document.querySelectorAll('.js-picture');
galleryPicturesManipulation(allPictures, gallery)