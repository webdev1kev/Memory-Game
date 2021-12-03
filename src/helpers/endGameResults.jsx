const endGameResults = (playerScores) => {
  const results = {};

  const sortedScores = playerScores.sort((a, b) => b.score - a.score);
  const [firstWinner] = sortedScores.splice(0, 1);
  firstWinner.won = true;

  const playerResults = sortedScores.map((player) => {
    if (player.score === firstWinner.score) {
      results.tied = true;
      player.won = true;
      return player;
    }
    player.won = false;
    return player;
  });

  playerResults.unshift(firstWinner);

  results.scoreList = playerResults;

  return { ...results };
};

export default endGameResults;
