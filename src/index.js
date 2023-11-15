import SimpleLightbox from "simplelightbox";
import Notiflix from 'notiflix';
import { resetPage, searchImages } from './usersApi.js';
import { getTotalHits } from './usersApi.js';

const refs = {
    form: document.querySelector('.search-form'),
    searchBtn: document.querySelector('.header_button'),
    divGallery: document.querySelector('.gallery'),
    loadMoreBtn: document.querySelector('.load-more')
};


const hiddenClass = 'hidden';

function showLoadMoreButton() {
    refs.loadMoreBtn.classList.remove(hiddenClass);
};

function hideLoadMoreButton() {
    refs.loadMoreBtn.classList.add(hiddenClass);
};

refs.form.addEventListener('submit', onFormSubmit)

async function onFormSubmit(e) {
    e.preventDefault();
    console.log('submit');
}



