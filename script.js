const dataNascimento = new Date("2006-06-02T20:52:00");

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataNascimento;

    const segundosTotal = Math.floor(diferenca / 1000);
    const minutosTotal = Math.floor(segundosTotal / 60);
    const horasTotal = Math.floor(minutosTotal / 60);
    const diasTotal = Math.floor(horasTotal / 24);

    const anos = Math.floor(diasTotal / 365.25);
    const meses = Math.floor((diasTotal % 365.25) / 30.4375);
    const dias = Math.floor((diasTotal % 365.25) % 30.4375);

    const horas = horasTotal % 24;
    const minutos = minutosTotal % 60;
    const segundos = segundosTotal % 60;

    const contadorFormatado = `${anos} anos, ${meses} meses, ${dias} dias, \n${horas} horas, ${minutos} minutos e ${segundos} segundos`;
 
    document.getElementById("contador").innerText = contadorFormatado;
}

setInterval(atualizarContador, 1000);
atualizarContador();

