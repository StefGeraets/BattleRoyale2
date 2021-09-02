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
  events: [
    {
      name: "beforeStart",
      value: 10,
      percentage: 10,
    },
    {
      name: "firstZoneStart",
      value: 11,
      percentage: 21,
    },
    {
      name: "firstZoneCountdown",
      value: 4,
      percentage: 25,
    },
    {
      name: "firstZoneShrink",
      value: 9,
      percentage: 34,
    },
    {
      name: "secondZoneStart",
      value: 11,
      percentage: 35,
    },
    {
      name: "secondZoneCountdown",
      value: 4,
      percentage: 39,
    },
    {
      name: "secondZoneShrink",
      value: 9,
      percentage: 48,
    },
    {
      name: "thirdZoneStart",
      value: 7,
      percentage: 55,
    },
    {
      name: "thirdZoneCountdown",
      value: 4,
      percentage: 59,
    },
    {
      name: "thirdZoneShrink",
      value: 9,
      percentage: 68,
    },
    {
      name: "fourthZoneStart",
      value: 11,
      percentage: 79,
    },
    {
      name: "fourthZoneCountdown",
      value: 4,
      percentage: 83,
    },
    {
      name: "fourthZoneShrink",
      value: 9,
      percentage: 92,
    },
  ],
};
