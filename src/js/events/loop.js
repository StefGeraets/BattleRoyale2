import {
  pauseTimerIndicator,
  startTimerIndicator,
} from "@app/components/timebar/timebar";
import { time } from "@app/data/state";
import * as UI from "@app/ui/dm";

const increaseTick = () => (time.elapsed += time.tick);

const calculateGameTimes = () =>
  time.events.map((event) => ({
    time: time.total * (event.percentage / 100),
    name: event.name,
  }));

const timezones = calculateGameTimes();

const loop = () => {
  increaseTick();
  const event = timezones.find((element) => element.time === time.elapsed);

  if (event !== undefined) {
    triggerTimeEvent(event);
  }

  if (time.elapsed >= time.total) {
    clearInterval(time.interval);
  }
};

export const togglePlayPause = () => {
  time.isPlaying = !time.isPlaying;

  UI.togglePlayPause();

  if (time.isPlaying) {
    startTimerIndicator();
    time.interval = setInterval(loop, time.tick);
  } else {
    pauseTimerIndicator();
    clearInterval(time.interval);
  }
};

const triggerTimeEvent = (event) => {
  console.log(event);
  switch (event.name) {
    case "beforeStart":
      console.log("Before start");
      break;
    case "zoneStart":
      console.log("first zone start");
      break;
    case "zoneCountdown":
      break;
    case "zoneShrink":
      break;
  }
};
