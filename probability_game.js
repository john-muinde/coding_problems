const NUM_SIMULATIONS = 10000; // number of simulations to run

// Function to simulate a single game
function simulateGame(stopCondition) {
  let rolls = 0; // number of rolls

  // Roll the die until the stop condition is met
  while (true) {
    rolls++;
    let roll1 = Math.floor(Math.random() * 6) + 1; // first roll
    let roll2 = Math.floor(Math.random() * 6) + 1; // second roll
    if (roll1 === 5 && roll2 === stopCondition) {
      break; // stop rolling
    }
  }

  return rolls; // return the number of rolls
}

// Simulate the first game (stop condition is 6)
let totalRolls1 = 0; // total number of rolls for game 1
for (let i = 0; i < NUM_SIMULATIONS; i++) {
  totalRolls1 += simulateGame(6);
}
let expectedValue1 = totalRolls1 / NUM_SIMULATIONS; // calculate expected value

// Simulate the second game (stop condition is 5)
let totalRolls2 = 0; // total number of rolls for game 2
for (let i = 0; i < NUM_SIMULATIONS; i++) {
  totalRolls2 += simulateGame(5);
}
let expectedValue2 = totalRolls2 / NUM_SIMULATIONS; // calculate expected value

// Print the results
console.log(`Expected value for game 1: $${expectedValue1.toFixed(2)}`);
console.log(`Expected value for game 2: $${expectedValue2.toFixed(2)}`);
