/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { UserController } from '../app/components/user/user.controller';
import { GitService } from '../app/components/git/git.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { SearchboxDirective } from '../app/components/searchbox/searchbox.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('angularSpa', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMaterial', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('git', GitService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .controller('UserController', UserController)
  .directive('aspaSearchbox', SearchboxDirective)
  .directive('acmeMalarkey', MalarkeyDirective);
