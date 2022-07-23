const dgram = require('dgram');
const readline = require('readline');

console.clear();

const msgLength = [];

const client = dgram.createSocket('udp4');
const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

terminal.question('Fale com o servidor: ', (answer) => {
        client.send(answer, 5000, 'localhost');
        msgLength.push(answer)
})

client.on('message',(buffer,rinfo) => {
    let msg = buffer.toString();
    const address = client.address();

    console.log(`[${rinfo.port}]: ${msg}`)

    msgLength.push(msg)

    terminal.question(`[${address.port}]: `, (answer) => {
        if(answer === "Finalizar sessão") {
            for (index in msgLength) {
                let msgsLength = 0;
                if(index === msgLength.length-1) {
                    msgsLength = msgsLength + msgLength[index].length
                    
                }
                msgsLength = msgsLength + msgLength[index].length
            }
            console.log(`Comprimento médio das mensagens: ${msgLength.length / msgsLength}`)
            client.send(`${address.port} finalizou a sessão `, 5000, 'localhost');
                setTimeout(()=> {
                    client.close(terminal.question("Sessão finalizada", () => {}))
                },2000)
            msgLength.push(answer);
            console.log(`Número de mensagens trocadas: ${(msgLength.length)-1}`);
            } else {
                client.send(answer, 5000, 'localhost');
                msgLength.push(answer);
            }
            
        })
    });
