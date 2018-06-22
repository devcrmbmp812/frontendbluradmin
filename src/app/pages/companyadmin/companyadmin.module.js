/**
 * @author m.umair
 * created on 22.06.2018
 */
(function() {
    'use strict';
  
    angular.module('BlurAdmin.pages.companyadmin', [])
      .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('main.companyadmin', {
          url: '/companyadmin',
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'CompanyAdminCtrl',
          title: 'CompanyAdmin',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 500,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.employees', {
          url: '/employees',
          templateUrl: 'app/pages/companyadmin/employees/employeesTable.html',
          title: 'Employees',
          sidebarMeta: {
            order: 0,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.employeesadd', {
          url: '/employees/add',
          templateUrl: 'app/pages/companyadmin/employees/employeesAdd.html',
          title: 'Employees Add',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.employeesedit', {
          url: '/employees/edit',
          templateUrl: 'app/pages/companyadmin/employees/employeesEdit.html',
          title: 'Employees Edit',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.tutorials', {
          url: '/tutorials',
          templateUrl: 'app/pages/companyadmin/tutorials/tutorialsTable.html',
          title: 'Tutorials',
          sidebarMeta: {
            order: 100,
          },
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.tutorialsadd', {
          url: '/tutorials/add',
          templateUrl: 'app/pages/companyadmin/tutorials/tutorialsAdd.html',
          title: 'Tutorials Add',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.tutorialsedit', {
          url: '/tutorials/edit',
          templateUrl: 'app/pages/companyadmin/tutorials/tutorialsEdit.html',
          title: 'Tutorials Edit',
          authenticate: true,
          params: {
            authRoles: ['admin','superadmin']
          }
        }).state('main.companyadmin.departments', {
            url: '/departments',
            templateUrl: 'app/pages/companyadmin/departments/departmentsTable.html',
            title: 'Departments',
            sidebarMeta: {
              order: 200,
            },
            authenticate: true,
            params: {
                authRoles: ['admin','superadmin']
            }
        }).state('main.companyadmin.departmentsadd', {
            url: '/departments/add',
            templateUrl: 'app/pages/companyadmin/departments/departmentsAdd.html',
            title: 'Departments Add',
            authenticate: true,
            params: {
                authRoles: ['admin','superadmin']
            }
        }).state('main.companyadmin.departmentsedit', {
            url: '/departments/edit',
            templateUrl: 'app/pages/companyadmin/departments/departmentsEdit.html',
            title: 'Departments Edit',
            authenticate: true,
            params: {
                authRoles: ['admin','superadmin']
            }
        }).state('main.companyadmin.departmentAdmins', {
            url: '/departmentAdmins',
            templateUrl: 'app/pages/companyadmin/departmentAdmins/departmentAdminsTable.html',
            title: 'Department Admins',
            sidebarMeta: {
                order: 300,
            },
            authenticate: true,
            params: {
                authRoles: ['admin','superadmin']
            }
        }).state('main.companyadmin.departmentAdminsAdd', {
            url: '/departmentAdmins/add',
            templateUrl: 'app/pages/companyadmin/departmentAdmins/departmentAdminsAdd.html',
            title: 'Department Admins Add',
            authenticate: true,
            params: {
                authRoles: ['admin','superadmin']
            }
        }).state('main.companyadmin.departmentAdminsEdit', {
            url: '/departmentAdmins/edit',
            templateUrl: 'app/pages/companyadmin/departmentAdmins/departmentAdminsEdit.html',
            title: 'Department Admins Edit',
            authenticate: true,
            params: {
                authRoles: ['admin','superadmin']
            }
        });
      $urlRouterProvider.when('/main/companyadmin', '/main/companyadmin/employees');
    }
  
  })();