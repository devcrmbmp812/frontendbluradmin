/**
 * @author m.umair
 * created on 21.06.2018
 */
(function() {
  'use strict';

  angular.module('BlurAdmin.pages.authSignUp')
    .controller('authSignUpCtrl', authSignUpCtrl);

  /** @ngInject */
  function authSignUpCtrl($scope,$http) {
    var vm = this;

    vm.submit = submit;
    function submit(isValid) {
      if(isValid) {

        var data = { "username":"Joddhn", "password":30 }
        
        $http.post('http://localhost:3010/api/signup', data)
            .success(function (data, status, headers, config) {
                console.log(data);
            })
            .error(function (data, status, header, config) {
                console.log(data);
            });
        
        console.log("form amazing");
      }
    }



  }

})();