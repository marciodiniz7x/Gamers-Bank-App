function toLogin() {
    window.location = "pages/login.html";
}

// Seletor de elementos
const data = document.querySelector('.data');
const hora = document.querySelector('.hora');
const hora2 = document.querySelector('.hora2');

const nome = document.querySelector('.nome-texto');
const nomeSobreposto = document.querySelector('.nome-area-sobreposto');

const senha = document.querySelector('.senha-texto');
const senhaSobreposto = document.querySelector('.senha-area-sobreposto');

//////////////////
///// Script /////

// Atualizar data e hora
setInterval(() => {
    // Datas
    const pegaData = new Date();
    const diaSemana = pegaData.getDay();
    // método slice para adicionar um 0 quando o número tiver apenas 1 dígito
    const diaMes = ("00" + pegaData.getDate()).slice(-2);
    //

    const mes = pegaData.getMonth();
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    const ano = pegaData.getFullYear()

    const semana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    // Relógio
    const pegaHora = ("00" + pegaData.getHours()).slice(-2);
    const pegaMinuto = ("00" + pegaData.getMinutes()).slice(-2);

    //Substituição dos valores
    data.innerHTML = `${semana[diaSemana]}, ${diaMes} ${meses[mes]}, ${ano} `;
    hora.innerHTML = `${pegaHora}:${pegaMinuto}`;
    hora2.innerHTML = `${pegaHora}:${pegaMinuto}`;
}, 100);

// Eventos
nomeSobreposto.addEventListener('focusin', () => {
    nome.classList.add('sumir');
    nomeSobreposto.classList.remove('sumir');
});

nomeSobreposto.addEventListener('focusout', () => {
    if (nomeSobreposto.value == "") {
        nome.classList.remove('sumir');
        nomeSobreposto.classList.add('sumir');
    } 
});

senhaSobreposto.addEventListener('focusin', () => {
    senha.classList.add('sumir');
    senhaSobreposto.classList.remove('sumir');
});

senhaSobreposto.addEventListener('focusout', () => {
    if (senhaSobreposto.value == "") {
        senha.classList.remove('sumir');
        senhaSobreposto.classList.add('sumir');
    }
});