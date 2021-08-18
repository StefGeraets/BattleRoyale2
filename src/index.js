import "../styles.scss";

import { renderGrid } from "./js/map";

renderGrid(24, 24);

const testString = (message = "random message") => `log ${message}`;

console.log(testString("Things here"));
