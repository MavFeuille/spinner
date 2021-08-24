// process.stdout.write('hello from spinner1.js... \rheyyy\n');

const start = Date.now()
console.log("Start at: ", start);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\   ')
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 900);

setTimeout(() => {
  process.stdout.write('\r/   ')
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-   ')
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\   ')
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|   ')
}, 1700);

setTimeout(() => {
  process.stdout.write('\r\n   ')
}, 1700);


setTimeout(() => {
  console.log(`End at:`, (Date.now()- start))
}, 1700);



