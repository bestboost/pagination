//  https://newsapi.org/
//   4330ebfabc654a6992c2aa792f3173a3
//   http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 
import './css/common.css';
import NewApiService from './js/news-service';

const refs = {
     searchForm: document.querySelector('.js-search-form'),
     articlesContainer: document.querySelector('.js-articles-container'),
     loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMoreBtn);

let searchQuery = '';

function onSearch(e) {
     e.preventDefault();

     const searchQuery = e.currentTarget.elements.query.value;

     newsApiService.fetchArticles(searchQuery);
};

function onLoadMoreBtn() {
     newsApiService.fetchArticles(searchQuery);
}


