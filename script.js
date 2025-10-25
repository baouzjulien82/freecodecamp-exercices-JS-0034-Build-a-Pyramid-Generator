const pyramid = (string, integer, boolean) => {
  let i = -1;
  let j = integer;
  let space = " ";
  while(i < integer) {
    i+=2;
    j-=1;
    let pyramidConstruc = `${space.repeat(j)} ${string.repeat(i)}`;
    console.log(pyramidConstruc);
  };
};

pyramid("O", 10)


/* ---0
   --000
   -00000
   0000000 */
