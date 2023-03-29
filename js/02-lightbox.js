import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulList = document.querySelector('.gallery');
const listGallery = galleryItems.map(item => 
`
<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
`).join('');

ulList.insertAdjacentHTML('beforeend', listGallery);

const lightbox = new SimpleLightbox('.gallery a', {
  caption: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
