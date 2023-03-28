let num = 88,
  flag = false;

function primeCheck() {
  for (let i = 2; i <= num / 2; ++i) {
    if (num % i == 0) {
      flag = true;
      break;
    }
  }
}
if (!flag) console.log(num + ' is a prime number.');
else console.log(num + ' is not a prime number.');

function palindrome() {
  let sum = 0;
  let temp = num;
  let rem;
  while (num > 0) {
    rem = num % 10;
    sum = sum * 10 + rem;
    num = parseInt(num / 10);
  }
  if (temp == sum) console.log('This Numbers is a palindrome');
  else console.log('This Numbers are not palindrome');
}

primeCheck();
palindrome();