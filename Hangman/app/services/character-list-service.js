'use strict';

angular.module('hangman').
  factory('CharacterListService', ['WordService', function(WordService) {
    var characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return {
      getCharacters: function() {
        return characters;
      },
      guess: function(character) {
        WordService.guess(character);
      },
      isAlreadyTried: function(character) {
        return WordService.getSelectedCharacters().indexOf(character) >= 0;
      }
    };
  }]);