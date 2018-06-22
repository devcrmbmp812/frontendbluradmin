/**
 * @author m.umair
 * created on 22.06.2018
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages', [
      'ui.router',
      'BlurAdmin.pages.services',
      'BlurAdmin.pages.config',
      'BlurAdmin.pages.main',
      'BlurAdmin.pages.dashboard',
      'BlurAdmin.pages.ui',
      'BlurAdmin.pages.components',
      'BlurAdmin.pages.form',
      'BlurAdmin.pages.tables',
      'BlurAdmin.pages.charts',
      'BlurAdmin.pages.maps',
      'BlurAdmin.pages.profile',
      'BlurAdmin.pages.authSignIn',
      'BlurAdmin.pages.authSignUp',
      'BlurAdmin.pages.superadmin',
      'BlurAdmin.pages.companyadmin',
      'BlurAdmin.pages.departadmin',
    ])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/authSignIn');
  }

})();