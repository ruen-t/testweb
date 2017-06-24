class App {
  constructor() {
    console.log("App controller")
    var self = this;
    self.message = "first page"
  }
}

angular
  .module('app')
  .component('app', {
    templateUrl: 'app/containers/App.html',
    controller: App,
    controllerAs: "vm"
  })
 
