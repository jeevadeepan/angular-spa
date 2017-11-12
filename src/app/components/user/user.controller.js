export class UserController {
  constructor ($stateParams) {
    'ngInject';

    this.id = $stateParams.id;
  }
}
