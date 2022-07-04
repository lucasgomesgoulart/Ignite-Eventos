const openModal = () => document.getElementById('modal').classList.add('active')
const openModal2 = () => document.getElementById('modal-2').classList.add('active')
const closeModal = () => {
    limparInputs()
    document.getElementById('modal').classList.remove('active')
}
const closeModal2 = () => {
    limparInputs()
    document.getElementById('modal-2').classList.remove('active')
}

const getLogin = () => {return localStorage.getItem('loggedUser')}
const getLocalStorage = () => JSON.parse(localStorage.getItem('listaJogadores')) ?? []

const readJogadores = () => getLocalStorage().filter(jogador => jogador.criadoPor == getLogin())

const criarLista = (jogadores, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${jogadores.modalidade}</td>
        <td>${jogadores.nome}</td>
        <td class="senha-acesso">${jogadores.senha}</td>
        <td id="entradaInput">${""}</td>
        <td id="saidaInput">${""}</td>
        <td>
            <button type="button" onclick="entradaModalOpen(${index})" class="botao-entrada" id="entradaIndex-${index}">Entrada</button>
            <button type="button" onclick="saidaModalOpen(${index})" class="botao-saida" id="saidaIndex-${index}">Saida</button>
        </td>
    `
    document.querySelector('#tabelaJogadores>tbody').appendChild(newRow)
}

const limparTabela = () => {
    const rows = document.querySelectorAll('#tabelaJogadores>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const limparInputs = () => {
    const inputs = document.querySelectorAll('.modal-field')
    inputs.forEach(inputs => inputs.value = '')
    document.getElementById('password-acesso').dataset.index = 'new'
}

const entradaEvento = (index) => {
    const jogadores = readJogadores()[index]
    jogadores.index = index
    openModal()
    document.getElementById('password-acesso').focus()
    habilitaLeitura()
}

const entradaModalOpen = () => {
    if (event.target.type = 'button') {
        const [ action, index ] = event.target.id.split('-')
        if (action == 'entradaIndex') {
            entradaEvento(index)
        }
    }
}

const saidaEvento = (index) => {
    const jogadores = readJogadores()[index]
    jogadores.index = index
    openModal2()
    document.getElementById('password-acesso-2').focus()
    habilitaLeitura()
}

const saidaModalOpen = () => {
    if (event.target.type = 'button') {
        const [ action, index ] = event.target.id.split('-')
        if (action == 'saidaIndex') {
            saidaEvento(index)
        }
    }
}

const validacaoEntradaEvento = () => {
    const lista_jogadores = readJogadores()
    let passwordInput = document.getElementById('password-acesso')
    
    for (let i = 0; i < lista_jogadores.length; i++) {
        if (lista_jogadores[i].senha == passwordInput.value) {
            passwordInput.value = ""
            entradaHora()
            closeModal()
        } 
    }
}

const validacaoSaidaEvento = () => {
    const lista_jogadores = readJogadores()
    let passwordInputTwo = document.getElementById('password-acesso-2')
    
    for (let i = 0; i < lista_jogadores.length; i++) {
        if (lista_jogadores[i].senha == passwordInputTwo.value) {
            passwordInputTwo.value = ""
            saidaHora()
            closeModal2()
        } 
    }
}

const atualizarTabela = () => {
    const lista_jogadores = readJogadores()
    limparTabela()
    lista_jogadores.forEach(criarLista)
}
let senhaDigitada

const habilitaLeitura = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://172.20.10.5/teclado/hab", true);    
    xhttp.send();
}

const desabilitaLeitura = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://172.20.10.5/teclado/desab", true);    
    xhttp.send();
}

setInterval(function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {	
        senhaDigitada = this.responseText;
        if(senhaDigitada.length == 4)
        {
            document.getElementById('password-acesso').value = senhaDigitada
            console.log(senhaDigitada)
        }
        
      }
    };
    xhttp.open("GET", "http://172.20.10.5/teclado/leitura", true);    
    xhttp.send();
  }, 2000 ) ;

function entradaHora(){
    let dataAtual = new Date();
    let dia = ("0" + dataAtual.getDate()).slice(-2);
    let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours()
    let minutos = ("0" + dataAtual.getMinutes()).slice(-2);

    entrou = (`${dia}/${mes}/${ano} - ${horas}:${minutos}`)
    document.getElementById('entradaInput').innerHTML = entrou
}

function saidaHora(){
    let dataAtual = new Date();
    let dia = ("0" + dataAtual.getDate()).slice(-2);
    let mes = ("0" + (dataAtual.getMonth() + 1)).slice(-2);
    let ano = dataAtual.getFullYear();
    let horas = dataAtual.getHours()
    let minutos = ("0" + dataAtual.getMinutes()).slice(-2);

    entrou = (`${dia}/${mes}/${ano} - ${horas}:${minutos}`)
    document.getElementById('saidaInput').innerHTML = entrou
}

atualizarTabela()

document.getElementById('botao-confirmar').addEventListener('click', validacaoEntradaEvento)
document.getElementById('botao-confirmar').addEventListener('click', desabilitaLeitura)

document.getElementById('botao-confirmar-2').addEventListener('click', validacaoSaidaEvento)
document.getElementById('botao-confirmar-2').addEventListener('click', desabilitaLeitura)

document.getElementById('botao-cancelar').addEventListener('click', desabilitaLeitura)
document.getElementById('botao-cancelar').addEventListener('click', closeModal)

document.getElementById('botao-cancelar-2').addEventListener('click', desabilitaLeitura)
document.getElementById('botao-cancelar-2').addEventListener('click', closeModal)

document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('modalClose-2').addEventListener('click', closeModal2)