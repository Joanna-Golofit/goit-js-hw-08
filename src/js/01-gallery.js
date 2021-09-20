import _default from '../../node_modules/simplelightbox/dist/simple-lightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const createGallery = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href=${original}>
      <img class="gallery__image" src=${preview} alt=${description}>
    </a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", createGallery);

// gallery.addEventListener("click", event => {
//   event.preventDefault();
// });

let gallerySL = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
