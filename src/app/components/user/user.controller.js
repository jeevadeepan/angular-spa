export class UserController {
    constructor($stateParams, $window, $mdToast, git) {
        'ngInject';

        this.$window = $window;
        this.$mdToast = $mdToast;
        this.id = $stateParams.id;
        this.gistId = this.$window.sessionStorage.getItem(this.id);
        this.git = git;
        this.loadUser(this.id);
        this.loadUserGist(this.id);
    }

    loadUser(id) {
        return this.git.getUser(id).then((result) => {
            this.name = result.name;
            this.avatar = result.avatar_url;
            this.location = result.location;
        });
    }

    loadUserGist() {
        if (this.gistId) {
            this.git.getGist(this.gistId).then((result) => {
                this.gistDesc = result.description;
                this.gistCont = result.files.angulargist.content;
            });
        }
    }

    saveUserGist() {
        return this.git.saveGist(this.gistDesc, this.gistCont, this.gistId).then((result) => {
            this.$window.sessionStorage.setItem(this.id, result.id);
            this.$mdToast.show(
                this.$mdToast.simple()
                .textContent('Gist saved successfully!')
                .hideDelay(3000)
            );
        });
    }
}
