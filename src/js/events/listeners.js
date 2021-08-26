import { handleKeyPress } from "./keyboardEvents";

export const initListeners = () => {
  window.addEventListener("keydown", handleKeyPress);
};
