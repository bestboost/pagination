export default class NewApiService {
     constructor() {
          this.searchQuery = '';
          this.page = 1;
     };

     fetchArticles(){
          console.log(this);
       const options = {
          headers: {
               Authorization: '4330ebfabc654a6992c2aa792f3173a3',
          },
     };
     const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=5&page=${this.page}`;
     
     fetch(url, options)
     .then(r => r.json)
     .then(data => {
          this.incrementPage();
     })
     };

     incrementPage() {
          this.page += 1;
     };

     resetPage() {
          this.page = 1;
     };

     get query() {
          return this.searchQuery;
     };

     set query(newQuery) {
          this.searchQuery = newQuery;
     };
};

