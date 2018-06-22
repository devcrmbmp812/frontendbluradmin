/**
 * @author m.umair
 * created on 22.06.2018
 */
(function() {
    'use strict';
  
    angular.module('BlurAdmin.pages.departadmin', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main.departadmin', {
          url: '/departadmin',
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'DepartAdminCtrl',
          title: 'DepartAdmin',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 800,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.departadmin.employees', {
          url: '/employees',
          templateUrl: 'app/pages/departadmin/employees/employeesTable.html',
          title: 'Employees',
          sidebarMeta: {
            order: 0,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.departadmin.employeesadd', {
          url: '/employees/add',
          templateUrl: 'app/pages/departadmin/employees/employeesAdd.html',
          title: 'Employees',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        });
      $urlRouterProvider.when('/main/departadmin', '/main/departadmin/employees');
    }
  
  })();