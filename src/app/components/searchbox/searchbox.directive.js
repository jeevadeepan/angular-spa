export function SearchboxDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/searchbox/searchbox.html',
    scope: {
        creationDate: '='
    },
    controller: SearchboxController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class SearchboxController {
  constructor ($q, git) {
    'ngInject';
      this.git = git;
  }
    
    querySearch(query) {
        return this.git.getUsers(query).then((result) => result.items);
    }
}
