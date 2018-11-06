function myClass(p, q, r) {
  this.p = p;
  this.q = q;
  this.r = r;
}

console.time('test delete');
for (let i = 0; i < 1000000; i++) {
  const a = new myClass(2, 'something else', true)
  delete a.q;
  a.p = 3;
}
console.timeEnd('test delete');


console.time('test no delete');
for (let i = 0; i < 1000000; i++) {
  const a = new myClass(2, 'something else', true)
  a.q = undefined;
  a.p = 3;
}
console.timeEnd('test no delete');
