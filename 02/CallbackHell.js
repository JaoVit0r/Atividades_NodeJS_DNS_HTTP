function asyncFunctionModelCallback(action,mesage,time,callback = () => {}) {
  setTimeout(()=>{
    console.log(`[${action}]: ${mesage}`)
    callback()
  },time)
}

const levantarDaCamaCallback = function (callback) {
  const hora = prompt("Que horas são?")
  setTimeout(()=>{
    console.log(`[Acordar]: São ${hora} horas, acordar!`)
    callback()
  },2000)
};

const tomarBanhoCallback = asyncFunctionModelCallback.bind(this,"Tomar banho","Ligando chuveiro e tomando banho",4000);

const tomarCaféCallback = asyncFunctionModelCallback.bind(this,"Tomar café","Hmm pão quentinho, vou amassar!",4000);

const escovarDentesCallback = asyncFunctionModelCallback.bind(this,"Escovar os dentes","Hora de lançar o sorriso colgate!",4000);

const sairCallback = asyncFunctionModelCallback.bind(this,"Sair","Partiu pra rua!",6000);

const chegarCasaCallback = asyncFunctionModelCallback.bind(this,"Chegar em casa","Ufa, que bom chegar em casa",6000);

 levantarDaCamaCallback(() => {
   tomarBanhoCallback(() => {
     tomarCaféCallback(() => {
       escovarDentesCallback(() => {
         sairCallback(() => {
           chegarCasaCallback()
         })
       })
     })
   })
 })