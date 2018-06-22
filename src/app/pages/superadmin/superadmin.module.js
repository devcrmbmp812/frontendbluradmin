/**
 * @author m.umair
 * created on 22.06.2018
 */
(function() {
    'use strict';
  
    angular.module('BlurAdmin.pages.superadmin', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main.superadmin', {
          url: '/superadmin',
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'SuperAdminCtrl',
          title: 'SuperAdmin',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.superadmin.tutorial', {
          url: '/tutorial',
          templateUrl: 'app/pages/superadmin/tutorials/tutorialTable.html',
          title: 'Tutorials',
          sidebarMeta: {
            order: 0,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.superadmin.tutorialsadd', {
          url: '/tutorial/add',
          templateUrl: 'app/pages/superadmin/tutorials/tutorialAdd.html',
          title: 'Tutorials Add',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.superadmin.company', {
          url: '/company',
          templateUrl: 'app/pages/superadmin/companies/companyTable.html',
          title: 'Companys',
          sidebarMeta: {
            order: 100,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.superadmin.companyadd', {
          url: '/company/add',
          templateUrl: 'app/pages/superadmin/companies/companyAdd.html',
          title: 'Companys Add',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        });
      $urlRouterProvider.when('/main/superadmin', '/main/superadmin/company');
    }
  
  })();