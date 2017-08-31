function madLib(verb, adjective, noun) {
  return `We shall ${verb} the ${adjective} ${noun}`;
}
// console.log(madLib('strike', 'great', 'justice'));


function testFn() {
  var favFood = 'pizza';

  if (true) {
    let favFood = 'ramen';
    console.log(favFood);
  }

  console.log(favFood);
}
// testFn(); // ramen, pizza

function isSubstring (searchString, subString) {
  return searchString.includes(subString);
}
// console.log(isSubstring('superman', 'man'));

function fizzBuzz(nums) {
  let result = [];

  for( let i = 0; i < nums.length; i++) {
    if (nums[i] % 5 === 0 && nums[i] % 3 === 0) {
      continue;
    } else if (nums[i] % 5 === 0) {
      result += nums[i];
    } else if (nums[i] % 3 === 0) {
      result += nums[i];
    } else {
      continue;
    }
  }
}

// better solution

function fizzBuzz2(nums) {
  let fizzBuzzes = [];

  nums.forEach( el => {
    if ((el % 3 === 0) ^ (el % 5 === 0)) {
      fizzBuzzes.push(el);
    }
  });

  return fizzBuzzes;
}
// console.log(fizzBuzz2([1,2,3,4,5,6,7,8,9]));

function isPrime(num) {
  if( num < 2 && num > 0 ) { return true; }
  for( let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// console.log(isPrime(15485863));

function numNPrimes(n) {
  const primes = [];
  let i = 0;

  while (primes.length < n) {
    i += 1;
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}
// console.log(numNPrimes(7));

function sumOfNPrimes(n) {
  let total = 0;
  var primes = numNPrimes(n);

  primes.forEach(prime => { total += prime });

  return total;
}
console.log(sumOfNPrimes(7));
