const pyramid = (string, integer, boolean) => {
  let i = 0;
  let space = " ";
  while(i < integer) {
    i++;
    let pyramidConstruc = `${space.repeat(integer - i)} ${string.repeat(i)}`;
    console.log(pyramidConstruc);
  };
};

pyramid("O", 10)


/* ---0---
   --000--
   -00000-
   0000000 */
