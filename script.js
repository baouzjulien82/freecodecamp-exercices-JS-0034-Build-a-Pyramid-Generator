const pyramid = (char, height, inverted) => {
  let result = "\n";

  for (let i = 0; i < height; i++) {
    const level = inverted ? height - i - 1 : i;
    const spaces = " ".repeat(height - level - 1);
    const blocks = char.repeat(level * 2 + 1);

    result += spaces + blocks + "\n";
  }

  return result;
};

// Tests
console.log(pyramid("0", 10, false));
console.log(pyramid("0", 10, true));
