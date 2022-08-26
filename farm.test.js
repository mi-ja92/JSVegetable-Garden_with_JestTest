const {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getTotalProfit,
  getProfitForCrop,
  getCostsForCrop,
  getRevenueForCrop,
} = require("./farm.js");

//Test 1 Winc
describe("getYieldForPlant", () => {
  const corn = {
    name: "corn",
    yield: 30,
  };

  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(30);
  });
});

//Test 2 Winc
describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const crops = {
      crop: corn,
      numCrops: 10,
    };
    expect(getYieldForCrop(crops)).toBe(30);
  });
});

//Mytest 1

describe("getYieldForCrop", () => {
  test("Get yield for crop with env. factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = { crop: corn, numCrops: 10 };
    const factors = {
      sun: "low",
      wind: "medium",
    };
    expect(getYieldForCrop(crops, factors)).toBe(16.799999999999997);
  });
});

//Test 3 Winc
describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    const corn = {
      name: "corn",
      yield: 3,
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalYield({ crops })).toBe(23);
  });

  //Test 4 Winc
  test("Calculate total yield with 0 amount", () => {
    const corn = {
      name: "corn",
      yield: 0,
    };
    const crops = [{ crop: corn, numCrops: 0 }];
    expect(getTotalYield({ crops })).toBe(0);
  });
});

// //Mytest 2
describe("getTotalYield", () => {
  test("Get total yield with multiple crops and env. factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    const factors = {
      sun: "medium",
      wind: "high",
    };
    expect(getTotalYield({ crops }, factors)).toBe(9.2);
  });
});

//Mytest 3
describe("getRevenueForCrop", () => {
  test("Get revenue for crop without env. factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 3,
    };
    const crops = { crop: corn, numCrops: 5 };
    expect(getRevenueForCrop(crops)).toBe(45);
  });
});

// //Mytest 4
describe("getRevenueForCrop", () => {
  test("Get revenue for crop with env. factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      price: 4,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = { crop: corn, numCrops: 5 };
    const factors = {
      sun: "high",
      wind: "medium",
    };
    expect(getRevenueForCrop(crops, factors)).toBe(63);
  });
});

//Mytest 5
describe("getCostsForCrop", () => {
  test("Calculate sowing cost", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 3,
    };
    const crops = { crop: corn, numCrops: 5 };
    expect(getCostsForCrop(crops)).toBe(15);
  });
});

//Mytest 6
describe("getProfitForCrop", () => {
  test("Calculate profit for crop without factors", () => {
    const corn = {
      name: "corn",
      yield: 3,
      cost: 3,
      price: 3,
    };
    const crops = { crop: corn, numCrops: 5 };
    expect(getProfitForCrop(crops)).toBe(30);
  });
});

//Mytest 7
describe("getProfitForCrop", () => {
  test("Get profit for crop with factors", () => {
    const corn = {
      name: "corn",
      yield: 7,
      cost: 3,
      price: 7,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = { crop: corn, numCrops: 5 };
    const factors = {
      sun: "high",
      wind: "medium",
    };
    expect(getProfitForCrop(crops, factors)).toBe(242);
  });
});

//Mytest 8
describe("getTotalProfit", () => {
  test("Get total profit with factors", () => {
    const corn = {
      name: "corn",
      yield: 7,
      cost: 3,
      price: 7,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const pumpkin = {
      name: "pumpkin",
      yield: 4,
      cost: 3,
      price: 10,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const factors = {
      sun: "high",
      wind: "medium",
    };
    const crops = [
      { crop: corn, numCrops: 5 },
      { crop: pumpkin, numCrops: 2 },
    ];
    expect(getTotalProfit({ crops }, factors)).toBe(320);
  });
});

//extra test revenue
describe("getRevenueForCrop", () => {
  test("Get revenue for crop with factors", () => {
    const corn = {
      name: "corn",
      yield: 7,
      cost: 3,
      price: 7,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = { crop: corn, numCrops: 5 };
    const factors = {
      sun: "high",
      wind: "medium",
    };
    expect(getRevenueForCrop(crops, factors)).toBe(257);
  });
});

//get costs
describe("getCostsForCrop", () => {
  test("Get costs for crop with factors", () => {
    const corn = {
      name: "corn",
      yield: 7,
      cost: 3,
      price: 7,
      factors: {
        sun: {
          low: 0.8,
          medium: 1,
          high: 1.5,
        },
        wind: {
          low: 1,
          medium: 0.7,
          high: 0.4,
        },
      },
    };
    const crops = { crop: corn, numCrops: 5 };
    const factors = {
      sun: "high",
      wind: "medium",
    };
    expect(getCostsForCrop(crops)).toBe(15);
  });
});
