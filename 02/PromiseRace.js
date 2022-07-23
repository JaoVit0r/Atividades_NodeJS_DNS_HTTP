const modelFunctionPromiseRace = function (poder,tempoParaGolpear) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(poder);
      resolve()
    },tempoParaGolpear)
  })
}



const Goku = modelFunctionPromiseRace.bind(this,"Kamehame-ha!!!!",1000)
const Picollo = modelFunctionPromiseRace.bind(this," Makankosappo!!!!",3000)
const Kuririn = modelFunctionPromiseRace.bind(this," Kienzan!!!!",4000)
const Vegeta = modelFunctionPromiseRace.bind(this," Final Flash!!!!",2000)


Promise.race([
  Goku(),
  Picollo(),
  Kuririn(),
  Vegeta()
]).then(() => {console.log("Vencedor!")})