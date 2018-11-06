function myClass(p, q, r) {
  this.p = p;
  this.q = q;
  this.r = r;
}

console.time('test no dynamic property');
for (let i = 0; i < 1000000; i++) {
  const a = new myClass(2, 'something else', true)
  a.p = 3;
}
console.timeEnd('test no dynamic property');


console.time('test dynamic property');
for (let i = 0; i < 1000000; i++) {
  const a = new myClass(2, 'something else', true)
  a.m = 3;
}
console.timeEnd('test dynamic property');
