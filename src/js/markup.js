import galleryItems from '../data.json';
import galleryListMark from '../templates/template.hbs';


const galleryRef = document.querySelector('.js-gallery');
const imagesMarkup = createImagesMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', imagesMarkup);


function createImagesMarkup(galleryItems) {
    
    return galleryItems.map(galleryListMark).join('');
};

export default galleryRef;