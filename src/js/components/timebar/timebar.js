import "./timebar.scss";
import { time } from "@app/data/state";
import { rootElement, timebar, timer } from "@app/ui/elements";

export const renderTimebar = (element = timebar) => {
  generateTimeBlocks(calculateTimeBlocks(), element);
  setCountdownHeight(element);
  rootElement.style.setProperty("--game-time", `${time.total}ms`);
};

// As the timeblock height are defined in percentages, the border-top must be defined in pixels
const setCountdownHeight = (element) => {
  const timebarHeight = element.offsetHeight;
  rootElement.style.setProperty(
    "--countdown-height",
    `${timebarHeight * 0.04}px`
  );
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
    if (event.name === "zoneShrink") {
      const lastIndex = timings.length - 1;
      timings[lastIndex] = timings[lastIndex] + event.value;

      continue;
    }

    timings.push(event.value);
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
