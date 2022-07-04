function entrar() {
    let usuario_login = document.querySelector('#usuario')
    let senha_login = document.querySelector('#senha')
    let listaUser = JSON.parse(localStorage.getItem('listaUser')) ?? []
    let loggedUser
    let userValid = {
        usuario: usuario_login.value,
        senha: senha_login.value
    }

    let valida = listaUser.filter(user => user.usuario == usuario_login.value)
    let validaSenha = listaUser.filter(user => user.senha == senha_login.value)

    if (valida.length == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Algo deu errado...',
            text: 'Usuário ou senha incorretos!'
        })
    } else if (validaSenha.length == 0) {
        if (validaSenha.length == 0) {
            Swal.fire({
                icon: 'error',
                title: 'Algo deu errado...',
                text: 'Usuário ou senha incorretos!'
            })
        }
    }

    if (valida[0].usuario == usuario_login.value) {
        if (valida[0].senha == senha_login.value) {
            loggedUser = userValid.usuario
            localStorage.setItem('loggedUser', (loggedUser))
            window.location.href = 'logado.html'
        }
    }
}