export class MainController {
    constructor($window) {
        'ngInject';

        this.homepage = $window.location.href.indexOf('angular-spa') > -1 ? '/angular-spa' : '/';
    }
}
