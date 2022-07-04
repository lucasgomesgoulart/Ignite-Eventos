const linkLogin = () => {window.location.href = './login.html'}

const getLocalStorage = () => JSON.parse(localStorage.getItem('listaUser')) ?? []
const setLocalStorage = (chefe_delegacao) => localStorage.setItem('listaUser', JSON.stringify(chefe_delegacao))

const cadastrar = () => {
    const chefe_delegacao = getLocalStorage()
    if (usuarioFlag && senhaFlag && confirmaFlag) {
        chefe_delegacao.push({
            usuario: usuario.value,
            senha: senha.value,
            evento: evento.value
        })
        setLocalStorage(chefe_delegacao)
        linkLogin()
        alert('Cadastro realizado com sucesso')
    } else {
        alert('Cadastro nao realizado /nVerifique o erro')
    }
}


const basico = () => {alert('ola')}