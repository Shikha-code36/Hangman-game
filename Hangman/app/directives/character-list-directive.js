'use strict';

angular.module('hangman')
  .directive('characterList', [function() {
    return {
      templateUrl: function(){
        return 'app/templates/character-list-template.html';
      }
    };
  }]);