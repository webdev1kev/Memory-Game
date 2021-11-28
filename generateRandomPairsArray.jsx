const generateRandomPairsArray = (array, amount) => {
  const randomNumberRange = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const pairs = [];
  const firstHalf = [];
  let iconsCopy = [...array];

  //RANDOMIZE firstHalf ARRAY ORDER

  while (firstHalf.length < amount) {
    const randomNum = randomNumberRange(iconsCopy.length - 1, 0);
    firstHalf.push(...iconsCopy.splice(randomNum, 1));

    //REITERATES OVER PASSED IN ARRAY TO CREATE ANOTHER SET OF RANDOM UNIQUE VALUES TO BE ADDED TO firstHalf ARRAY

    if (iconsCopy.length === 0) {
      iconsCopy = [...array];
    }
  }

  const secondHalf = [...firstHalf];

  //MERGES firstHalf AND secondHalf IN A RANDOMIZED ORDER

  for (let i = 0; i < amount; i++) {
    const randomNum = randomNumberRange(firstHalf.length - 1, 0);
    const randomNum2 = randomNumberRange(secondHalf.length - 1, 0);

    pairs.push(...firstHalf.splice(randomNum, 1));
    pairs.push(...secondHalf.splice(randomNum2, 1));
  }
  return pairs;
};

export default generateRandomPairsArray;
