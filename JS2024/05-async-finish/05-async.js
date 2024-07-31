// Event Loop

// setTimeout
// setInterval
// setImmediate
// requestAnimationFrame

// const timeout = setTimeout(function () {
//   console.log(1);
// }, 2000);

// clearTimeout(timeout);
// let counter = 0;
// setInterval(function () {
//   console.log("tick", ++counter);
// }, 2000);

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }

// delay(function () {
//   console.log(1);
// });

const delay = (time = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
};

// delay(2500)
//   .then(() => {
//     console.log("timeout");
//   })
//   .catch(() => {
//     console.log("error");
//   })
//   .finally(() => {
//     console.log("finally");
//   });

const getData = () =>
  new Promise((resolve, reject) => {
    resolve([1, 2, 3]);
  });

async function asyncExample() {
  try {
    await delay(2000);
    const data = await getData();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

asyncExample();
