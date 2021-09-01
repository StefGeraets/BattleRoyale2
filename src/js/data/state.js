export const token = {
  element: document.createElement("div"),
  position: {
    x: 0,
    y: 0,
  },
};

export const grid = {
  rows: 24,
  cols: 24,
};

export const time = {
  tick: 100,
  isPlaying: false,
  interval: "",
  elapsed: 0,
  total: 3 * 60 * 1000, // 3 minutes for testing purposes,
  percentiles: [
    {
      name: "beforeStart",
      percentage: 10,
    },
    {
      name: "firstZoneStart",
      percentage: 21,
    },
    {
      name: "firstZoneCountdown",
      percentage: 25,
    },
    {
      name: "firstZoneShrink",
      percentage: 30,
    },
    {
      name: "secondZoneStart",
      percentage: 41,
    },
    {
      name: "secondZoneCountdown",
      percentage: 45,
    },
    {
      name: "secondZoneShrink",
      percentage: 50,
    },
    {
      name: "thirdZoneStart",
      percentage: 57,
    },
    {
      name: "thirdZoneCountdown",
      percentage: 61,
    },
    {
      name: "thirdZoneShrink",
      percentage: 66,
    },
    {
      name: "fourthZoneStart",
      percentage: 73,
    },
    {
      name: "fourthZoneCountdown",
      percentage: 77,
    },
    {
      name: "fourthZoneShrink",
      percentage: 82,
    },
  ],
};
