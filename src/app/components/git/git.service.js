export class GitService {
  constructor ($log, $http) {
    'ngInject';

    this.$log = $log;
    this.$http = $http;
    this.apiHost = 'https://api.github.com';
  }

  getUsers(qs) {
    return this.$http.get(this.apiHost + '/search/users?q=' + qs)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getUsers.\n' + angular.toJson(error.data, true));
      });
  }
}
