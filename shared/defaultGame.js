var Immutable = require('immutable');

module.exports = Immutable.fromJS({
  ended: false,
  lastCorrectWordIndex: null,
  phaseIndex: 0,
  playerIndex: 0,
  players: [],
  roundStarted: false,
  secondsPerRound: 8,
  started: false,
  teamIndex: 0,
  wordIndex: 0,
  words: [],
  points: [],
  wordsPerPlayer: 2
});