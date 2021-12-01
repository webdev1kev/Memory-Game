export let selectedCoins = [];

const compareCoins = (coinsArray) => {
  const [coin1, coin2] = coinsArray;

  if (coin1.name === coin2.name) {
    coin1.setMatched(true);
    coin2.setMatched(true);
    selectedCoins = [];
  } else {
    setTimeout(() => {
      coin1.setClicked(false);
      coin2.setClicked(false);
    }, 700);
    selectedCoins = [];
  }
};

export default compareCoins;
