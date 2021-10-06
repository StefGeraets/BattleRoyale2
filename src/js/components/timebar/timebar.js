import "./timebar.scss";
import { time } from "@app/data/state";
import { rootElement, timebar, timer } from "@app/ui/elements";

export const renderTimebar = (element = timebar) => {
  generateTimeBlocks(calculateTimeBlocks(), element);
  rootElement.style.setProperty("--game-time", `${time.total}ms`);
};

export const startTimerIndicator = () => {
  timer.style.animationPlayState = "running";
};
export const pauseTimerIndicator = () => {
  timer.style.animationPlayState = "paused";
};

const calculateTimeBlocks = () => {
  const timings = [];
  for (const event of time.events) {
    const lastIndex = timings.length - 1;
    switch (event.name) {
      case "beforeStart":
        timings.push(event.value);
        break;
      case "zoneStart":
        timings.push(event.value);
        break;
      case "zoneCountdown":
        timings.push(event.value);
        break;
      case "zoneShrink":
        timings[lastIndex] = timings[lastIndex] + event.value;
        break;
    }
  }

  return timings;
};

const generateTimeBlocks = (blockHeights, element) =>
  blockHeights.map((blockHeight) => {
    const timeBlock = document.createElement("div");
    timeBlock.classList.add("timeblock");
    timeBlock.style.height = `${blockHeight}%`;
    element.append(timeBlock);
  });
