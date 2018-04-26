var app = angular.module('components', []);
app.controller('menuController', function($scope, $rootScope) {
  $scope.search = "";
  $scope.$watch('search', function () {
    $rootScope.$broadcast('searchEvent', $scope.search);
  });
});