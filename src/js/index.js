import "../css/styles.scss";

import sum from "./sum";

const testString = (message = "random message") => `log ${message}`;
const output = sum(1, 2);

console.log(testString("Things here"), output);
