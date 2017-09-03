// window.setTimeout(function () {
//   alert('HAMMER TIME!');
// }, 5000);
//
// // Timeout with a Closure
//
// function hammerTime (time) {
//   window.setTimeout(function () {
//     alert(`${time} is HAMMER TIME!`);
//   });
// }

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  let first, second;

  reader.question('Would you like some tea?', function(ansOne) {
    console.log(`${ansOne}...Very good`);

    reader.question('would you like some biscuits?', function(ansTwo) {
      console.log(`${ansTwo}...mmm yes.`);

      const firstRes = (ansOne === 'yes') ? 'do' : 'don\'t';
      const secondRes = (ansTwo === 'yes') ? 'do' : 'don\'t';

      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });
}

teaAndBiscuits();
