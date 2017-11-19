export function runBlock($log, $http) {
    'ngInject';
    $log.debug('runBlock end');
    $http.defaults.headers.common.Authorization = 'token c53bb7f7cb6e9486e12153ee5b9363cd61f6f7b3';
}
