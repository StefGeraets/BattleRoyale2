import { time } from "@app/data/state";
import * as UI from "@app/ui/dm";

const increaseTick = () => (time.elapsed += time.tick);

const calculateGameTimes = () =>
  time.events.map((event) => ({
    time: time.total * (event.percentage / 100),
    name: event.name,
  }));

const loop = () => {
  increaseTick();
  const timezones = calculateGameTimes();
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
  } else {
    clearInterval(time.interval);
  }
};

const triggerTimeEvent = (event) => {
  console.log(event);
  switch (event) {
    case "beforeStart":
      break;
    case "firstZoneStart":
      break;
    case "firstZoneCountdown":
      break;
    case "firstZoneShrink":
      break;
    case "secondZoneStart":
      break;
    case "secondZoneCountdown":
      break;
    case "secondZoneShrink":
      break;
    case "thirdZoneStart":
      break;
    case "thirdZoneCountdown":
      break;
    case "thirdZoneShrink":
      break;
    case "fourthZoneStart":
      break;
    case "fourthZoneCountdown":
      break;
    case "fourthZoneShrink":
      break;
  }
};
