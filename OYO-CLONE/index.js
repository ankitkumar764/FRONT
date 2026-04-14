// setTimeout(() => {
//   console.log("400 sec");
// }, 400);

// for (let i = 1; i <= 3; i++) { console.log("Loop count:", i);
// }

// console.log("Program started");

// setTimeout(() => {
//   console.log("This runs after 200 seconds");
// }, 200);

// console.log("Program ended");




console.log("start");

let count = 1;

const intervalId = setInterval(() => {
  console.log("Count:", count);
  count++;

  if (count > 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

console.log("End");

for(let i=0; i<=10000; i++){
  console.log(i);
}

setTimeout(() => {
  console.log("settimeout 2");
}, 999);