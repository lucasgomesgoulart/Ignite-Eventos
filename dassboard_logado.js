let ver_jogadores = document.getElementById('ver_jogadores')
let acessoAoEvento = document.getElementById('acesso_evento')

const exibirTelaVerJogadores = () => {window.location.href = './logado_verJogadores.html'}
const acesso_evento = () => {window.location.href = './logado_acessoEvento.html'}
const sairPerfil = () => {
    localStorage.getItem('loggedUser')
    localStorage.setItem('loggedUser', "")
    alert('Saiu!')
    window.location.href = './login.html'
}

ver_jogadores.addEventListener('click', () => {exibirTelaVerJogadores()})
acessoAoEvento.addEventListener('click', () => {acesso_evento()})
