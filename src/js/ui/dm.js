import { renderGrid } from "@app/components/grid/grid";
import { placeToken } from "@app/components/token/token";

export const dmView = () => {
  renderGrid(24, 24);
  placeToken();
};
