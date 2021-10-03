import { modalLightbox, modalImage,buttonsIventOnModalOpen } from './opener_image'

const modalCloseBtn = document.querySelector('.lightbox__button');
const overlayModal = document.querySelector('.lightbox__overlay');

overlayModal.addEventListener('click', closeBtn);
modalCloseBtn.addEventListener('click', closeBtn);

function closeBtn() {
      modalLightbox.classList.remove('is-open');
      modalImage.src = " ";
      window.removeEventListener('keydown', buttonsIventOnModalOpen);
};

export default closeBtn;