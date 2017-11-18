export class GitService {
    constructor($log, $http) {
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

    getUser(login) {
        return this.$http.get(this.apiHost + '/users/' + login)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error('XHR Failed for getUser.\n' + angular.toJson(error.data, true));
            });
    }

    saveGist(desc, cont, gistId) {
        let requestMethod = angular.isUndefined(gistId) ? this.$http.patch : this.$http.post;
        let requestUrl = `${this.apiHost}/gists${angular.isUndefined(gistId) ? '/' + gistId : ''}`;

        return requestMethod(requestUrl, {
                "description": desc,
                "public": true,
                "files": {
                    "angulargist": {
                        "content": cont
                    }
                }
            })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error('XHR Failed for saveGist.\n' + angular.toJson(error.data, true));
            });
    }

    getGist(gistId) {
        return this.$http.get(this.apiHost + '/gists/' + gistId)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.$log.error('XHR Failed for getGist.\n' + angular.toJson(error.data, true));
            });
    }
}
