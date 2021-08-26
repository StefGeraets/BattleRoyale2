import { gameLoop } from "@app/events/loop";
import { dmView } from "@app/ui/dm";
import { initListeners } from "@app/events/listeners";

export const initDMGame = () => {
  dmView();
  gameLoop();
  initListeners();
};

// const playerGame = () => {
//   renderMap();

//   eventListeners();
// }
