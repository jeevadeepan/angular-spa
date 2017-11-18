import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { UserController } from '../app/components/user/user.controller';
import { GitService } from '../app/components/git/git.service';
import { SearchboxDirective } from '../app/components/searchbox/searchbox.directive';

angular.module('angularSpa', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('git', GitService)
  .controller('MainController', MainController)
  .controller('UserController', UserController)
  .directive('aspaSearchbox', SearchboxDirective);
