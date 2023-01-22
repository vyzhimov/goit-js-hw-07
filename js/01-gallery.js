import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryList = document.querySelector(".gallery");

const itemsMarkup = galleryItems.reduce((acc, {original, preview, description}) => {
  return (acc += `<div class="gallery__item">
                  <a class='gallery__link' href="${original}">
                  <img 
                    class='gallery__image' 
                    src="${preview}" 
                    data-source="${original}" 
                    alt="${description}"">
                  </img></a></div>`);
}, "");

galleryList.insertAdjacentHTML("afterbegin", itemsMarkup);

galleryList.addEventListener("click", onImgClick);

function getItemUrl (event) {
  return event.target.dataset.source;
}

function onImgClick (event) {
  event.preventDefault();
  
  const isImage = event.target.classList.contains('gallery__image')
  if(!isImage) {
    return;
  }
  
  const imgUrl = getItemUrl(event);
  const instance = basicLightbox.create(
        `<img src="${imgUrl}" width="800" height="600">`
      );
  instance.show();

  function closeModal (event) {
    if (event.code !== "Escape") {
      return; 
    }
    this.close();
    window.removeEventListener('keydown', instanceCloseModal)
    console.log(event);
  }

  const instanceCloseModal = closeModal.bind(instance)
  window.addEventListener('keydown', instanceCloseModal);
}


