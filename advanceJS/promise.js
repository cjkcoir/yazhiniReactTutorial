// let tatkalBook = new Promise((resolve, reject) => {
//   let bookingSuccess = true;

//   if (bookingSuccess) {
//     resolve(1000);
//   } else {
//     reject();
//   }
// });

function tatkalBook() {
  new Promise((resolve, reject) => {
    let bookingSuccess = true;

    if (bookingSuccess) {
      resolve(1000);
    } else {
      reject();
    }
  });
}

tatkalBook()
  .then((amount) => {
    console.log(`Thanks for booking, i will transfer amunt Rs.${amount}`);
  })
  .catch(() => {
    console.log("Thanks for trying");
  });

// function failure() {
//   console.log("Thanks for trying");
// }
