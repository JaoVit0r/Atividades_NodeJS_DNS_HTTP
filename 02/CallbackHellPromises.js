function asyncFunctionModelPromise(action,mesage,time){
  return new Promise((resolve) => {
    setTimeout(()=>{
    console.log(`[${action}]: ${mesage}`)
    resolve()
  },time)
  })
}

const levantarDaCamaPromise = function () {
  const hora = prompt("Que horas são?")
  return new Promise((resolve) => {
    setTimeout(()=>{
    console.log(`[Acordar]: São ${hora} horas, acordar!`)
    resolve()
  },2000)    
  })
  
};

const tomarBanhoPromise = asyncFunctionModelPromise.bind(this,"Tomar banho","Ligando chuveiro e tomando banho",4000);

const tomarCaféPromise = asyncFunctionModelPromise.bind(this,"Tomar café","Hmm pão quentinho, vou amassar!",4000);

const escovarDentesPromise = asyncFunctionModelPromise.bind(this,"Escovar os dentes","Hora de lançar o sorriso colgate!",4000);

const sairPromise = asyncFunctionModelPromise.bind(this,"Sair","Partiu pra rua!",6000);

const chegarCasaPromise = asyncFunctionModelPromise.bind(this,"Chegar em casa","Ufa, que bom chegar em casa",6000);


// levantarDaCamaPromise()
//   .then(() => tomarBanhoPromise())
//   .then(() => tomarCaféPromise())
//   .then(() => escovarDentesPromise())
//   .then(() => sairPromise())
//   .then(() => chegarCasaPromise())