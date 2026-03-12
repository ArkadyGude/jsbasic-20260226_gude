function isEmpty(obj) {
  let k = 0;
  for (key in obj) {
    k++;
  }
  return k === 0; 
}
