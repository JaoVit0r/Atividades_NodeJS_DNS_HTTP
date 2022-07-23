const modelStepsFunction = function (numero,tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${numero}º passo`)
      resolve();
    },tempo);
  })
}

const primeiroPasso = modelStepsFunction.bind(this,1,1000);

const segundoPasso = modelStepsFunction.bind(this,2,2000);

const terceiroPasso = modelStepsFunction.bind(this,3,3000);

const quartoPasso = modelStepsFunction.bind(this,4,4000);

// Promise.all([
//     primeiroPasso(),
//     segundoPasso(),
//     terceiroPasso()
//   ]).then((results) => {
//   console.log(results)
// })

