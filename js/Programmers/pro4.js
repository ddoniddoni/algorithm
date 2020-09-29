const a = "abcdef";

if (a.length % 2 === 0) {
  let b;
  b = Math.floor(a.length / 2);
  console.log(a[b - 1], a[b]);
} else {
  let b;
  b = Math.floor(a.length / 2);
  console.log(a[b]);
}
