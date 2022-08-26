const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (crops, factors) => {
  const withoutFactor = crops.numCrops * crops.crop.yield;
  if (!factors) {
    return withoutFactor;
  } else {
    const envfactors = crops.crop.factors;
    let sunInfluece;
    let windInfluece;

    switch (factors.sun) {
      case "low":
        sunInfluece = envfactors.sun.low;
        break;
      case "medium":
        sunInfluece = envfactors.sun.medium;
        break;
      case "high":
        sunInfluece = envfactors.sun.high;
        break;
      default:
        sunInfluece = 1;
    }
    switch (factors.wind) {
      case "low":
        windInfluece = envfactors.wind.low;
        break;
      case "medium":
        windInfluece = envfactors.wind.medium;
        break;
      case "high":
        windInfluece = envfactors.wind.high;
        break;
      default:
        windInfluece = 1;
    }
    const withFactor = withoutFactor * sunInfluece * windInfluece;
    return withFactor;
  }
};

const getTotalYield = (crops, factors) =>
  crops.crops
    .map((crop) => getYieldForCrop(crop, factors))
    .reduce((a, b) => a + b);

const getCostsForCrop = (plant) => plant.crop.cost * plant.numCrops;

const getRevenueForCrop = (crops, factors) => {
  const yieldpc = getYieldForCrop(crops, factors);
  const total = crops.crop.price * yieldpc;
  return Math.round(total);
};

const getProfitForCrop = (crops, factors) => {
  const rev = getRevenueForCrop(crops, factors);
  const cost = getCostsForCrop(crops);
  return rev - cost;
};

const getTotalProfit = (input, factors) => {
  const crops = input.crops;
  const profit = crops.map((crop) => getProfitForCrop(crop, factors));
  return profit.reduce((a, b) => a + b);
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostsForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};
