function loading() {
    console.log("Sua conta está carregando, por favor, aguarde ....\n")
}

loading(); loading(); loading();
loading.call();

function BR() {
    console.log('====================================================')
}
BR();

function importante(mensagem) {
    console.log(`ATENÇÃO: ${mensagem} \n`)
}
importante("Você precisa dominar o javascript, entendeu?");
importante("Utilize todas as ferramentas para se dar bem no mundo da programação");