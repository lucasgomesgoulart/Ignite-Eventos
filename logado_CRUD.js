const openModal = () => document.getElementById('modal').classList.add('active')

const closeModal = () => {
    limparInputs()
    document.getElementById('modal').classList.remove('active')
}

const geradorSenha = () => {
    const numbers = "1234567890*#"
    const tamanhoSenha = 4
    let senha = ""

    for (let i = 0; i < tamanhoSenha; i++) {
        let randomSenha = Math.floor(Math.random() * numbers.length)
        senha += numbers.substring(randomSenha, randomSenha + 1)
    }
    // Validar se algum outro usuario tem a senha gerada, senao gerar nova senha
    return senha
}

const getLogin = () => {return localStorage.getItem('loggedUser')}
const getLocalStorage = () => JSON.parse(localStorage.getItem('listaJogadores')) ?? []
const setLocalStorage = (lista_jogadores) => localStorage.setItem('listaJogadores', JSON.stringify(lista_jogadores))


// CRUD

const deletarJogadores = (index) => {
    const lista_jogadores = readJogadores()
    lista_jogadores.splice(index, 1)
    setLocalStorage(lista_jogadores)
}

const atualizarJogadores = (index, jogadores) => {
    const lista_jogadores = getLocalStorage()
    lista_jogadores[index] = jogadores
    setLocalStorage(lista_jogadores)
    document.location.reload(true);
}

const readJogadores = () => getLocalStorage().filter(jogador => jogador.criadoPor == getLogin())

const criarJogadores = (jogadores) => {
    const lista_jogadores = getLocalStorage()
    lista_jogadores.push(jogadores)
    setLocalStorage(lista_jogadores)
}

const validaForm = () => {return document.getElementById('form').reportValidity()}

const limparInputs = () => {
    const inputs = document.querySelectorAll('.modal-field')
    inputs.forEach(inputs => inputs.value = '')
    document.getElementById('nomeJogador').dataset.index = 'new'
}

const salvarJogadores = () => {
    if (validaForm()) {
        const jogadores = {
            modalidade: document.getElementById('mySelect').value,
            nome: document.getElementById('nomeJogador').value,
            dtNascimento: document.getElementById('dtNascimento').value,
            telefone: document.getElementById('telefone').value,
            cpf: document.getElementById('cpf').value,
            senha: geradorSenha(),
            criadoPor: getLogin()
        }
        const index = document.getElementById('nomeJogador').dataset.index
        if (index == 'new') {
            criarJogadores(jogadores)
            atualizarJogadores()
            closeModal()
        } else {
            atualizarJogadores(index, jogadores)
            atualizarTabela()
            closeModal()
        }
    }
}

const criarLista = (jogadores, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${jogadores.modalidade}</td>
        <td>${jogadores.nome}</td>
        <td>${jogadores.dtNascimento}</td>
        <td>${jogadores.telefone}</td>
        <td>${jogadores.cpf}</td>
        <td>
            <button type="button" class="editar-botao" id="editarIndex-${index}">Editar</button>
            <button type="button" class="botao-excluir" id="deletarIndex-${index}">Excluir</button>
        </td>
    `
    document.querySelector('#tabelaJogadores>tbody').appendChild(newRow)
}

const limparTabela = () => {
    const rows = document.querySelectorAll('#tabelaJogadores>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const atualizarTabela = () => {
    const lista_jogadores = readJogadores()
    limparTabela()
    lista_jogadores.forEach(criarLista)
}

const preencherInputs = (jogadores) => {
    document.getElementById('mySelect').value = jogadores.modalidade
    document.getElementById('nomeJogador').value = jogadores.nome
    document.getElementById('dtNascimento').value = jogadores.dtNascimento
    document.getElementById('telefone').value = jogadores.telefone
    document.getElementById('cpf').value = jogadores.cpf
    document.getElementById('nomeJogador').dataset.index = jogadores.index
}

const editarJogadores = (index) => {
    const jogadores = readJogadores()[index]
    jogadores.index = index
    preencherInputs(jogadores)
    openModal()
}

const editarExclusao = (event) => {
    if (event.target.type = 'button') {
        
        const [action, index] = event.target.id.split('-')

        if (action == 'editarIndex') {
            editarJogadores(index)
        } else {
            const jogadores = readJogadores()[index]
            Swal.fire({
                title: 'Você tem certeza?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText: 'Cancelar!',
                confirmButtonText: 'Sim!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Jogador excluído!',
                  )
                    deletarJogadores(index),
                    atualizarTabela()
                }
              })
        }
    }
}

atualizarTabela()

// Eventos

document.getElementById('cadastrarJogadores').addEventListener('click', openModal)

document.getElementById('modalClose').addEventListener('click', closeModal)

document.getElementById('button-salvar').addEventListener('click', salvarJogadores)

document.getElementById('tabelaJogadores').addEventListener('click', editarExclusao)

document.getElementById('cancelar').addEventListener('click', closeModal)