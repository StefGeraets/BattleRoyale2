import { time } from "@app/data/state";
import * as UI from "@app/ui/dm";

const increaseTick = () => (time.elapsed += time.tick);

const loop = () => {
  increaseTick();
  console.log(time.elapsed);
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
