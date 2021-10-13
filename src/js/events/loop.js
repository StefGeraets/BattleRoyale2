import { time } from "@app/data/state";
import {
  countdown,
  pauseClock,
  resumeClock,
} from "@app/components/countdown/countdown";
import * as UI from "@app/ui/dm";

const increaseTick = () => (time.elapsed += time.tick);

const calculateGameTimes = () =>
  time.events.map((event) => ({
    time: time.total * (event.percentage / 100), // TODO: Refactor to reduce, to remove percentage from event state
    name: event.name,
    value: event.value,
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
    time.interval = setInterval(loop, time.tick);
    if (time.countdown.remaining > 0) {
      resumeClock();
    }
  } else {
    clearInterval(time.interval);
    pauseClock();
  }
};

const triggerTimeEvent = (event) => {
  switch (event.name) {
    case "beforeStart":
      // before start
      break;
    case "zoneStart":
      // hold time
      break;
    case "zoneCountdown":
      // start countdown
      countdown(event);
      break;
    case "zoneShrink":
      break;
  }
};
