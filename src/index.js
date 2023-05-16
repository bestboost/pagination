//  https://newsapi.org/
//   4330ebfabc654a6992c2aa792f3173a3
//   http://newsapi.org/v2/everything?q=cat&language=en&pageSize=5&page=1
 
import './css/common.css';
import NewApiService from './js/news-service';
import articlesTpl from './templates/articles.hbs';
import LoadMoreBtn from './js/components/load-more-btn';

const refs = {
     searchForm: document.querySelector('.js-search-form'),
     articlesContainer: document.querySelector('.js-articles-container'),
};

const loadMoreBtn = new LoadMoreBtn({
     selector: '[data-action="load-more"]',
     hidden: true,
});
const newsApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
     e.preventDefault();

     
     newsApiService.query = e.currentTarget.elements.query.value;
     loadMoreBtn.show();
     newsApiService.resetPage();
     clearArticlesContainer();
     fetchArticles();
};

function fetchArticles() {
     loadMoreBtn.disable();
     newsApiService.fetchArticles().then(articles => {
          appendArticlesMarkup(articles);
          loadMoreBtn.enable();
     });
}

function appendArticlesMarkup(articles) {
 refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
};

function clearArticlesContainer(){
     refs.articlesContainer.innerHTML = '';
}


