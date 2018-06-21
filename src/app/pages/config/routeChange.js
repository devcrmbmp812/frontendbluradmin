(function() {
  'use strict';

  angular.module('BlurAdmin.pages.config')
    .run(stateChangeStart);

  /** @ngInject */
  function stateChangeStart($rootScope, $state, localStorage) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
      var login_token = localStorage.getObject('token');
      console.log("login_token",login_token );
      if (toState.authenticate && _.isEmpty(login_token)) {
        // User isn’t authenticated
        $state.transitionTo("authSignIn");
        event.preventDefault();
      }
    });
  }

})();