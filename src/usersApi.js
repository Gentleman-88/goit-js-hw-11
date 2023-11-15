import axios from 'axios';
import Notiflix from 'notiflix';

const apiKey = '40663790-7e95e5f30e8cc12ce8787ce9f';
const apiUrl = 'https://pixabay.com/api/';
const perPage = 20;
let currentPage = 1;
let totalHits = 0;

export async function searchImages(query) {
    const params = {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: currentPage,
        per_page: perPage,
    };
};

try {
    const response = await axios.get(apiUrl, { params });
    const images = response.data.hits;
    currentPage += 1;
    return images;
} catch (error) {
    Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
};

export function resetPage() {
    currentPage = 1;
}
export function getTotalHits() {
    return totalHits;
}