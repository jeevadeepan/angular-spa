export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('user', {
      url: '/user/{id}',
      templateUrl: 'app/components/user/user.html',
      controller: 'UserController',
      controllerAs: 'user'
  });

  $urlRouterProvider.otherwise('/');
}
