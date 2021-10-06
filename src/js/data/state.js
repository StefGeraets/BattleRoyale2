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
      name: "zoneStart",
      value: 11,
      percentage: 21,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 25,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 34,
    },
    {
      name: "zoneStart",
      value: 11,
      percentage: 45,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 49,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 58,
    },
    {
      name: "zoneStart",
      value: 7,
      percentage: 65,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 69,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 78,
    },
    {
      name: "zoneStart",
      value: 7,
      percentage: 85,
    },
    {
      name: "zoneCountdown",
      value: 4,
      percentage: 89,
    },
    {
      name: "zoneShrink",
      value: 9,
      percentage: 98,
    },
  ],
};
