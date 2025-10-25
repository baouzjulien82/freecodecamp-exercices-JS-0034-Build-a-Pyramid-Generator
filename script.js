// version initiale

const pyramid = (string, integer, boolean) => {
  let row = "\n";
  let space = " ";
  let i = 0;
  while(i < integer) {
    i++;
    if(!boolean) {
    row+= space.repeat(integer - i)+ string.repeat(i * 2 - 1) + "\n";
    } else {
    row+= space.repeat(i - 1)+ string.repeat((integer * 2)-i * 2 + 1 ) + "\n";
    };
  };
  return row;
};
// Tests
console.log(pyramid("0", 10, false))
console.log(pyramid("0", 10, true))

// version améliorée

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
