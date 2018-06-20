/**
 * @author m.umair
 * created on 20.06.2018
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.authSignUp')
        .directive('equal', equal);
  
    /** @ngInject */
    function equal() {
        var link = function($scope, $element, $attrs, ctrl) {

            var validate = function(viewValue) {
                var comparisonModel = $attrs.equal;
                console.log(viewValue + ':' + comparisonModel);
            
                if(!viewValue || !comparisonModel){
                    // It's valid because we have nothing to compare against
                    ctrl.$setValidity('equal', true);
                }
            
                // It's valid if model is lower than the model we're comparing against
                ctrl.$setValidity('equal', viewValue === comparisonModel );
                return viewValue;
            };
          
            ctrl.$parsers.unshift(validate);
            ctrl.$formatters.push(validate);
          
            $attrs.$observe('equal', function(comparisonModel){
                  return validate(ctrl.$viewValue);
            });
          
        };
          
        return {
            require: 'ngModel',
            link: link
        };
    }
  })();