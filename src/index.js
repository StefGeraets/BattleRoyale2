import "./styles.scss";

import { renderGrid } from "@app/map";

renderGrid(24, 24);

const testString = (message = "random message") => `log ${message}`;

console.log(testString("Things here"));
