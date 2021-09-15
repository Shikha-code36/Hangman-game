'use strict';

angular.module('hangman').
  factory('WordService', ['$http', function($http) {
    var _this = this;

    this.competition = {
      wrongGuesses: 0,
      selectedCharacters: [],
      word: '',
      gameOver: false,
      win: false
    };

    this.checkWin = function() {
      for(var i = 0; i < _this.competition.word.length; i++) {
        var currentCharacter = _this.competition.word[i];
        if(_this.competition.selectedCharacters.indexOf(currentCharacter) < 0) {
          return false;
        }
      }
      _this.competition.win = true;
    };

    return {
      getCompetitionData: function() {
        return _this.competition;
      },
      guess: function(character) {
        _this.competition.selectedCharacters.push(character);
        if(_this.competition.word.indexOf(character) < 0) {
            _this.competition.wrongGuesses++;
        }
        if(_this.competition.wrongGuesses >= 6) {
          _this.competition.gameOver = true;
        }
        _this.checkWin();
      },
      getWord: function(callback) {
        $http.jsonp('http://randomword.setgetgo.com/get.php?callback=JSON_CALLBACK').success(function(data) {
          _this.competition.word = data.Word.trim().toLowerCase();
          callback(data);
        });
      },
      getSelectedCharacters: function() {
        return _this.competition.selectedCharacters;
      }
    };
  }]);