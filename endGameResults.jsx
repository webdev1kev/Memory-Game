const scores = [
  { score: 7, name: "Player 1" },
  { score: 6, name: "Player 2" },
  { score: 4, name: "Player 3" },
  { score: 3, name: "Player 4" },
];

const endGameResults = (playerScores) => {
  const results = { scoreList: [], tied: false };

  const sortedScores = playerScores.sort((a, b) => b.score - a.score);
  const [firstWinner] = sortedScores.splice(0, 1);
  firstWinner.won = true;

  const playerResults = sortedScores.map((player) => {
    if (player.score === firstWinner.score) {
      if (!results.tied) {
        results.tied = true;
      }
      player.won = true;
      return player;
    }
    player.won = false;
    return player;
  });

  playerResults.unshift(firstWinner);

  results.scoreList = playerResults;
};

export default endGameResults;
