// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// ANSWER
function revenueRecap() {
  const dailyRevenue = [{"day": "Monday", "amount": 200}, {"day": "Tuesday", "amount": 150}, {"day": "Wednesday", "amount": 100}, {"day": "Thursday", "amount": 20}, {"day": "Thursday", "amount": 600}];

const totalRevenue = dailyRevenue.reduce( function(accumulator, currentValue) {
return accumulator + currentValue.amount;
}, 0);
console.log(`This week I made $${totalRevenue} from my online store`);
//average revenue for the week
function averageRevenue() {
  const revenueArray = dailyRevenue.map(revenue => revenue.amount);
  const average = totalRevenue / revenueArray.length;
  console.log(`The average revenue for the week was $${average}, which seems low`);
  
  // Lowest revenue day
function lowestRevenueDay() {
  const lowestDay = Math.min(...revenueArray);
  console.log(`One of the main reasons the average is $${average} is because on Thursday we only made $${lowestDay}, which was our lowest day.`);
  }
lowestRevenueDay();
}
averageRevenue();
}
revenueRecap();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
// const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
// };
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

//ANSWER

const counter = () => {
  let count = 0;
  return function () {
    return ++count;
  }
};

const newCounter = counter();
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
// const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
// };
