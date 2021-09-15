'use strict';

var hangman = angular.module('hangman', []);

hangman.controller('HangmanController', ['$scope', '$window', 'CharacterListService', 'WordService', function($scope, $window, CharacterListService, WordService) {
  $scope.CharacterListService = CharacterListService;
  $scope.competitionData = WordService.getCompetitionData();

  $scope.retry = function() {
    $window.location.reload();
  };
}]);
