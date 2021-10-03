import galleryRef from "./markup";
import galleryItems from '../data.json';
import closeBtn from './close_button';

const modalLightbox = document.querySelector('.js-lightbox');
const modalImage = document.querySelector('.lightbox__image');

galleryRef.addEventListener('click', onClickImage);

function onClickImage(event) {
  if (event.target.nodeName !== 'IMG') return;
  
      modalImage.src = event.target.dataset.source;
      modalLightbox.classList.add('is-open');
      window.addEventListener('keydown', buttonsIventOnModalOpen);
};

function buttonsIventOnModalOpen(event) {
  if (!modalLightbox.classList.contains('is-open')) return;

  const arrayOfLinks = [];
      galleryItems.map(e => arrayOfLinks.push(e.original));
  

  switch (event.key) {
    case "Escape":
      closeBtn()
      break;
     
    case "ArrowRight":
      if ((arrayOfLinks.indexOf(modalImage.src) + 1) === arrayOfLinks.length) modalImage.src = arrayOfLinks[0];
      else modalImage.src = arrayOfLinks[arrayOfLinks.indexOf(modalImage.src) + 1];
      break;
     
    case "ArrowLeft":
      if ((arrayOfLinks.indexOf(modalImage.src)) === 0) modalImage.src = arrayOfLinks[arrayOfLinks.length - 1];
      else modalImage.src = arrayOfLinks[arrayOfLinks.indexOf(modalImage.src) - 1];
      break;
  };
};

export {modalLightbox,modalImage,buttonsIventOnModalOpen}