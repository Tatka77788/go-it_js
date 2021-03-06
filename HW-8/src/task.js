import images from './gallery-items.js';

const refs = {
  galleryList: document.querySelector('ul.gallery'),
  lightbox: document.querySelector('.lightbox'),
  btn: document.querySelector('[data-action="close-lightbox"]'),
  background: document.querySelector('.lightbox__content'),
};

const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.dataset.source = preview;
  img.src = original;
  img.alt = description;

  parent.appendChild(img);
};

const createLink = (item, parent) => {
  const { original } = item;
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.href = original;
  createImage(item, a);
  parent.appendChild(a);
};

const createItem = item => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  createLink(item, li);
  return li;
};

const renderListItems = arr => {
  const items = arr.map(item => createItem(item));
  refs.galleryList.append(...items);
};

renderListItems(images);

function onClickHandler(e) {
  e.preventDefault();
  if (e.target.nodeName === 'IMG') {
    refs.lightbox.classList.add('is-open');
    refs.lightbox.querySelector('.lightbox__image').src = e.target.src;
    refs.lightbox.querySelector('.lightbox__image').alt = e.target.alt;
  }
}

function onCloseHandler(e) {
  if (e.target.nodeName === 'I' || e.target.nodeName === 'BUTTON') {
    refs.lightbox.classList.remove('is-open');
  }
}

function backgroundHandler(e) {
  if (e.target.nodeName === 'DIV') {
    refs.lightbox.classList.remove('is-open');
  }
}

document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === 'Escape') {
    refs.lightbox.classList.remove('is-open');
  }
});

refs.galleryList.addEventListener('click', onClickHandler);
refs.btn.addEventListener('click', onCloseHandler);
refs.background.addEventListener('click', backgroundHandler);

