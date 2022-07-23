const dgram = require('dgram');
const readline = require('readline');

console.clear();

const server = dgram.createSocket('udp4');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

server.on('error',(err) => {
    console.error('Erro ao carregar servidor');
    server.close()
})

server.on('listening',() => {
    const Address = server.address();
    console.log(`Ouvindo na porta ${Address.port}`)    
})


const msgLength = []

server.on('message', (buffer, rinfo) => {
    let msg = buffer.toString();
    const address = server.address();

    console.log(`[${rinfo.port}]: ${msg}`)

    msgLength.push(msg)


    terminal.question(`[${address.port}]: `, (answer) => {
        if(answer === "Finalizar sessão") {
            for (index in msgLength) {
                let msgsLength = 0;
                if(index === (msgLength.length)-1) {
                    msgsLength = msgsLength + msgLength[index].length
                }
                msgsLength = msgsLength + msgLength[index].length
            console.log(`Comprimento médio das mensagens: ${msgLength.length / msgsLength}`)
            }
            server.send(`${address.port} finalizou a sessão `, rinfo.port, rinfo.address);
                setTimeout(()=> {
                    server.close(terminal.question("Sessão finalizada", () => {}))
                },2000)
            msgLength.push(answer);
            console.log(`Número de mensagens trocadas: ${msgLength.length-1}`);
            } else {
                server.send(answer, rinfo.port, rinfo.address);
                msgLength.push(answer);
            }
        })
    });

server.bind(5000);
