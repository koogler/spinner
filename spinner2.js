const spinCycle = "|/-\\|/-\\|\n"
let delay = 0;
let msAdd = 200;
for (let i of spinCycle) {
  setTimeout(() => {
    process.stdout.write(`\r${i}`)
  }, delay)
  delay += msAdd
}

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\    ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/    ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-    ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\    ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|    ');
// }, 1700);