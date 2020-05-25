// function wait(randInter) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve();
//     }, randInter);
//   });
// }

// async function orderedAsync() {
//   for (let i = 0; i < 10; i++) {
//     await wait(Math.round(Math.random() * 10000));
//     console.log(i);
//   }
// }

// orderedAsync();

// let prom1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("B");
//   }, 4000);
// });

// const asinxrontest = async () => {
//   console.log("A");
//   console.log(await prom1);
//   console.log("C");
// };

// asinxrontest();
