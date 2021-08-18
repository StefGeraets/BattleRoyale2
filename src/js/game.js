import { gameLoop } from "@app/events/loop";
import { dmView } from "@app/ui/dm";

export const initDMGame = () => {
  dmView();
  gameLoop();
};

// const playerGame = () => {
//   renderMap();

//   eventListeners();
// }
