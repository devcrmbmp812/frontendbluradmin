/**
 * @author m.umair
 * created on 22.06.2018
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.main', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'app/pages/main/main.html',
        redirectTo: 'main.dashboard',
        authenticate: true,
        params: {
          authRoles: ['admin','superadmin']
        }

      });
  }

})();