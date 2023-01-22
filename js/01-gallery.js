import { galleryItems } from "./gallery-items.js";

// Change code below this line
const galleryList = document.querySelector(".gallery");

const itemsMarkup = galleryItems.reduce((acc, current) => {
  return (acc += `<a class='gallery__link' href="${current.original}"><img class='gallery__image' src="${current.preview}" data-source="${current.original}" alt="${current.description}""></img></a>`);
}, "");

galleryList.insertAdjacentHTML("afterbegin", itemsMarkup);

galleryList.addEventListener("click", onModalOpen);

function onModalOpen(event) {
  event.preventDefault();

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`
  );

  instance.show();

  window.addEventListener("keydown", onModalClose.bind(instance));
}

function onModalClose(event) {
  console.log(event);
  if (event.code === "Escape") {
    window.removeEventListener("keydown", onModalClose);
    this.close();
  }
}
