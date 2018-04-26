class App {
  constructor($scope, $http, $rootScope, $window) {
    const self = $scope;
    self.loadMore = loadMore;
    self.openLink = openLink;
    let page = 1;
    self.displayNews = [];
    self.allnews = [];

    loadMore();
    $rootScope.$on('searchEvent', function (event, keyword) {
      if (keyword.length > 3) {
        self.displayNews = [];

        for (let i = 0; i < self.allnews.length; i++) {
          const news = self.allnews[i];
          if (news.description.toLowerCase().includes(keyword.toLowerCase()) ||
            news.title.toLowerCase().includes(keyword.toLowerCase())) {
            self.displayNews.push(news);
          }
        }
      } else {
        self.displayNews = self.allnews;
      }
    });
    function openLink(url) {
      $window.open(url);
    }
    function loadMore() {
      const API = 'https://newsapi.org/v2/everything?' +
        'q=Apple&' +
        'from=2018-04-26&' +
        'sortBy=popularity&' +
        'apiKey=bdce258b977845a3a4fe478a8e8e46f9&' +
        'page=' + page;
      $http.get(API).then(function (response) {
        for (let i = 0; i < 15; i++) {
          self.allnews.push(response.data.articles[i]);
        }
        self.displayNews = self.allnews;
      });

      page++;
    }
  }

}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App,
    controllerAs: 'vm'
  });

