export const resetDom = () => (document.body.innerHTML = ``);

export const render3x3Grid = () =>
  (document.body.innerHTML = `<div id="grid">
    <div class="grid-item grid-item-0-0"></div>
    <div class="grid-item grid-item-0-1"></div>
    <div class="grid-item grid-item-0-2"></div>
    <div class="grid-item grid-item-1-0"></div>
    <div class="grid-item grid-item-1-1"></div>
    <div class="grid-item grid-item-1-2"></div>
    <div class="grid-item grid-item-2-0"></div>
    <div class="grid-item grid-item-2-1"></div>
    <div class="grid-item grid-item-2-2"></div>
  </div>`);
