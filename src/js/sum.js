const sum = (a, b) => {
  console.log("This will do something");
  if (!isNaN(a) || !isNaN(b)) {
    return a + b;
  }
};

export default sum;
