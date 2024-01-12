//test1
const todayFood = (a, b, c) => {
  return `The food i ate today is pancake with tea for ${a}, and for ${b} is pasta with soup and for ${c} is pizza`;
};
console.log(todayFood("breakfast", "lunch", "dinner"));

//test2
const fizzBuzz = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};
console.log(fizzBuzz(15));

//test3
const lastTest = (num1, num2) => {
  if ((num1 + num2) % 2 === 0) {
    console.log(num1 + num2);
  } else if (num1 * num2) {
    console.log(num1 * num2);
  } else {
    console.log("Make sure you enter 2 number");
  }
};
console.log(lastTest(4, 8));

//test4
let randmNum = [];
for (let i = 0; i < 6; i++) {
  randmNum.push(Math.floor(Math.random() * 50) + 1);
}
console.log(randmNum);

//test5
for (let i = 9; i > 0; i--) {
  console.log(i);
}
