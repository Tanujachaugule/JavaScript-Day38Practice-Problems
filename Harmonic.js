let N = 1,
  i;
let harmonicValue = 1;
for (i = 2; i <= N; i++) {
  harmonicValue += 1 / i;
}
console.log('N harmonic value is ' + harmonicValue);