import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulList = document.querySelector('.gallery');

const listGallery = galleryItems.map(item => 
`
<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</li>
`).join('');

ulList.insertAdjacentHTML('beforeend', listGallery);
ulList.addEventListener('click', (event) => {
    event.preventDefault();
    const clickEl = event.target;
    const srcImg = clickEl.dataset.source;

    const instance = basicLightbox.create(`<img src="${srcImg}">`);

    instance.show();
});

console.log(galleryItems);