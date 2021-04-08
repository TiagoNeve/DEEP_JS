function myAlert() {
    console.log('Excluindo arquivos .....');
}
setInterval(myAlert, 1000);

function hour() {
    console.log(new Date().getSeconds());
}
setInterval(hour, 1000);