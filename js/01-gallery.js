import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const imgGallery = CreateAndRenderMarkupGallery(galleryItems);
gallery.insertAdjacentHTML('beforeend', imgGallery);
function CreateAndRenderMarkupGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div >
`;
    })
      .join('');
};
gallery.addEventListener('click', onImageClick);
function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
    return
    };
    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}"> width = "800" height = "600"
    `,
    { 
        onShow: instance => {
        document.addEventListener('keydown', onEscapeKeyDown);      
    },      
        onClose: instance => {        
        document.removeEventListener('keydown', onEscapeKeyDown);      
    },    
});  
instance.show();

function onEscapeKeyDown(event) {    
    if (event.key !== 'Escape')      
    return;    
    instance.close();  
};

};









