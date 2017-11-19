export function runBlock($log, $http) {
    'ngInject';
    $log.debug('runBlock end');
    $http.defaults.headers.common.Authorization = 'token 70f02798a8acfc6af028d8eebe167b5a5d74bdd1';
}
