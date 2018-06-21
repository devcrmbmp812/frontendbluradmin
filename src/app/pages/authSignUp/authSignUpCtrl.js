/**
 * @author m.umair
 * created on 21.06.2018
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignUp')
    .controller('authSignUpCtrl', authSignUpCtrl);

  /** @ngInject */
  function authSignUpCtrl($scope, localStorage,$http, $state) {
    var vm = this;

    init();

    function init() {
      localStorage.clear();
    }

    vm.submit = submit;
    function submit(isValid) {
      if(isValid) {

        var data = { "username" : vm.fullname, "email" : vm.email, "password" : vm.password }
        
        $http.post('http://localhost:3010/api/signup', data)
            
            .success(function (data, status, headers, config) {
              console.log(data);
              if(data.success == true)
              {
                localStorage.setObject('userinfo',data.user);
                $state.go('main.dashboard');
              }
              else
              {
                vm.databaseerror = true;
              }
            })
            .error(function (data, status, header, config) {
                console.log(data);
            });
      }
    }
  }

})();