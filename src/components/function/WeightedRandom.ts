export default function WeightedRandom(items: any) {
    if (!items.length) {
      throw new Error('Items must not be empty');
    }
    const cumulativeWeights: any = [];
    for (let i = 0; i < items.length; i += 1) {
      cumulativeWeights[i] =items[i].weight + (cumulativeWeights[i - 1] || 0);
    }
    const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
    const randomNumber = maxCumulativeWeight * Math.random();
    for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
      if (cumulativeWeights[itemIndex] >= randomNumber) {
        return {
          item: items[itemIndex],
          index: itemIndex,
        };
      }
    }
  }