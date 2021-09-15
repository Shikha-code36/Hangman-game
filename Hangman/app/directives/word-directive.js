'use strict';

angular.module('hangman')
  .directive('word', ['WordService', function(WordService) {
    return {
      controller: function($scope) {
        WordService.getWord(function(data) {
          $scope.word = data.Word.trim().toLowerCase();
        });
      },
      controllerAs: 'ctrl',
      templateUrl: function(){
        return 'app/templates/word-template.html';
      }
    };
  }]);