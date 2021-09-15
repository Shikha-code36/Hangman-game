'use strict';

angular.module('hangman')
  .directive('hangman', [function() {
    return {
      templateUrl: function(){
        return 'app/templates/hangman-template.html';
      }
    };
  }]);