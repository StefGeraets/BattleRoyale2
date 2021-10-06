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
      percentage: 0,
    },
    {
      name: "zoneStart",
      value: 11,
      percentage: 10,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 21,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 25,
    },
    {
      name: "zoneStart",
      value: 11,
      percentage: 34,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 45,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 49,
    },
    {
      name: "zoneStart",
      value: 7,
      percentage: 58,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 65,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 69,
    },
    {
      name: "zoneStart",
      value: 7,
      percentage: 78,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 85,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 89,
    },
  ],
};
