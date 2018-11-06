function performOperation(p, q, r) {
  p = 10;
  q = p + 10;
  r = p + q + 10;
}

console.time('test no function');
for (let i = 0; i < 1000000; i++) {
  let p = q = r = 0;
   p = 10;
   q = p + 10;
   r = p + q + 10;
}
console.timeEnd('test no function');


console.time('test function');
for (let i = 0; i < 1000000; i++) {
  let p = q = r = 0;
  performOperation(p,q,r);
}
console.timeEnd('test function');
