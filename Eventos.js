let mySelect = document.getElementById('mySelect')
let nomeJogador = document.getElementById('nomeJogador')
let dataNasc = document.getElementById('dataNasc')
let telefone = document.getElementById('telefone')
let cpf = document.getElementById('cpf')
let labelModalidade = document.getElementById('labelModalidade')
let labelNomeJogador = document.getElementById('labelNomeJogador')
let labelDataNasc = document.getElementById('labelDataNasc')
let labelTelefone = document.getElementById('labelTelefone')
let labelCpf = document.getElementById('labelCpf')
let usuario = document.getElementById('usuario')
let senha = document.getElementById('senha')
let senhaConfirm = document.getElementById('senhaConfirm')
let evento = document.getElementById('select_evento')
let labelSenha = document.getElementById('labelSenha')
let labelSenhaConfirm = document.getElementById('labelSenhaConfirm')
usuarioFlag = false
senhaFlag = false
confirmaFlag = false
mySelectFlag = false
nomeJogadorFlag = false
dataNascFlag = false
telefoneFlag = false
cpfFlag = false


// Eventos de inputs

const validaCaracteres = () => {
    // Evento para tela de Cadastro CD
    usuario.addEventListener('keyup', () => {
        if (usuario.value.length < 6) {
            labelUsuario.setAttribute('style', 'color: red')
            labelUsuario.innerHTML = 'Usuario precisa ter no minimo 6 letras'
            usuario.style.border = '1px solid red'
            labelUsuario.style.fontSize = '15px'
            usuarioValue = false
            if (usuario.value == '') {
                labelUsuario.setAttribute('style', 'color: white')
                labelUsuario.innerHTML = 'Usuário de acesso'
                usuarioFlag = false
            }
        } else {
            labelUsuario.setAttribute('style', 'color: white')
            labelUsuario.innerHTML = 'Usuário de acesso'
            usuario.style.border = '1px solid green'
            usuarioFlag = true
        }
    })

    senha.addEventListener('keyup', () => {
        if (senha.value.length < 6) {
            labelSenha.setAttribute('style', 'color: red')
            labelSenha.innerHTML = 'Sua senha precisa conter no minimo 6 caracteres'
            senha.style.border = '1px solid red'
            labelSenha.style.fontSize = '15px'
            senhaFlag = false

            if (senha.value == '') {
                labelSenha.setAttribute('style', 'color: white')
                labelSenha.innerHTML = 'Senha'
                senhaFlag = false
            }
        } else {
            labelSenha.setAttribute('style', 'color: white')
            labelSenha.innerHTML = 'Senha'
            senha.style.border = '1px solid green'
            senhaFlag = true
        }

    })

    senhaConfirm.addEventListener('keyup', () => {
        if (senha.value != senhaConfirm.value) {
            labelSenhaConfirm.setAttribute('style', 'color : red')
            labelSenhaConfirm.innerHTML = 'As senhas são diferentes'
            senhaConfirm.style.border = ('1px solid red')
            labelSenhaConfirm.style.fontSize = '15px'
            confirmaFlag = false
            if (senhaConfirm.value == '') {
                confirmaFlag = false
            }
        } else {
            labelSenhaConfirm.setAttribute('style', 'color : white')
            labelSenhaConfirm.innerHTML = ('Confirmar Senha')
            senhaConfirm.style.border = ('1px solid green')
            confirmaFlag = true
        }
    })
    // Fim evento tela cadastro CD


    // Evento tela cadastro Jogadores
    mySelect.addEventListener('click', () => {
        if (mySelect.value == 0) {
            labelModalidade.setAttribute('style', 'color: red')
            labelModalidade.innerHTML = 'Por Favor, Selecione uma Modalidade'
            mySelect.style.border = '1px solid red'
            labelModalidade.style.fontSize = '15pt'
            mySelectFlag = false
        } else {
            labelModalidade.setAttribute('style', 'color: white')
            labelModalidade.innerHTML = 'Modalidade'
            mySelect.style.border = '1px solid green'
            mySelectFlag = true
        }
    })

    nomeJogador.addEventListener('keyup', () => {
        if (nomeJogador.value.length < 6) {
            labelNomeJogador.setAttribute('style', 'color: red')
            labelNomeJogador.innerHTML = 'Por favor digitar o Nome Completo'
            nomeJogador.style.border = '1px solid red'
            labelNomeJogador.style.fontSize = '15px'
            nomeJogadorValue = false

            if (nomeJogador.value == '') {
                labelNomeJogador.setAttribute('style', 'color: white')
                labelNomeJogador.innerHTML = 'Nome do Jogador'
                nomeJogadorFlag = false
            }
        } else {
            labelNomeJogador.setAttribute('style', 'color: white')
            labelNomeJogador.innerHTML = 'Nome do Jogador'
            nomeJogador.style.border = '1px solid green'
            nomeJogadorFlag = true
        }
    })

    dataNasc.addEventListener('click', () => {
        if (dataNasc.value == null) {
            labelDataNasc.setAttribute('style', 'color: red')
            labelDataNasc.innerHTML = 'Por favor, Informa a Data de Nascimento'
            dataNasc.style.border = '1px solid red'
            labelDataNasc.style.fontSize = '15px'
            dataNascFlag = false
        } else {
            labelDataNasc.setAttribute('style', 'color: white')
            labelDataNasc.innerHTML = 'Data de Nascimento'
            dataNasc.style.border = '1px solid green'
            dataNascFlag = true
        }
    })

    telefone.addEventListener('keyup', () => {
        if (telefone.value.length < 11) {
            labelTelefone.setAttribute('style', 'color: red')
            labelTelefone.innerHTML = 'Por favor, Informe um numero de Telefone'
            telefone.style.border = '1px solid red'
            labelTelefone.style.fontSize = '15px'
            telefoneFlag = false

            if (telefone.value == '') {
                labelTelefone.setAttribute('style', 'color: white')
                labelTelefone.innerHTML = 'Telefone'
                telefoneFlag = false
            }
        } else {
            labelTelefone.setAttribute('style', 'color: white')
            labelTelefone.innerHTML = 'Telefone'
            telefone.style.border = '1px solid green'
            telefoneFlag = true
        }
    })

    cpf.addEventListener('keyup', () => {
        if (cpf.value.length < 11) {
            labelCpf.setAttribute('style', 'color: red')
            labelCpf.innerHTML = 'Por favor um CPF'
            cpf.style.border = '1px solid red'
            labelCpf.style.fontSize = '15px'
            cpfFlag = false

            if (cpf.value == '') {
                labelCpf.setAttribute('style', 'color: white')
                labelCpf.innerHTML = 'CPF'
                cpfFlag = false
            }
        } else {
            labelCpf.setAttribute('style', 'color: white')
            labelCpf.innerHTML = 'CPF'
            cpf.style.border = '1px solid green'
            cpfFlag = true
        }
    })
    // Fim evento cadastro Jogadores
}

validaCaracteres()