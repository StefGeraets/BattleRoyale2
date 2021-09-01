import { dmView } from "@app/ui/dm";
import { initListeners } from "@app/events/listeners";

export const initDMGame = () => {
  dmView();
  initListeners();
};

// const playerGame = () => {
//   renderMap();

//   eventListeners();
// }
