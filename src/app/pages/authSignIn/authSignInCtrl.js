(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignIn')
    .controller('authSignInCtrl', authSignInCtrl);

  /** @ngInject */
  function authSignInCtrl($scope, localStorage, $state, $http) {
    var vm = this;

    vm.login = login;

    init();

    function init() {
      localStorage.clear();
    }

    function login(isValid) {
      
      if(isValid) {
        var userinfo = { username : vm.usernameemail, password : vm.password }
        
        $http.post("http://localhost:3010/api/signin",userinfo)
          .success(function(data,status,headers,config) { 
            console.log(data);
            if(data.token)
            {
              localStorage.setObject('userinfo', data.user);
              $state.go('main.dashboard');
            }
            else
            {
              vm.signinfailed = true;
            }
            
          })
          .error(function(data,status,header,config){
            console.log(data);
          })
      }
    }
  }

})();