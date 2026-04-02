const nome = document.getElementById('nome')
const senha = document.getElementById('senha')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let mensagem = []
    if (nome.value === '' || nome.value == null) {
        alert('Nome é obrigatório')
    }

    if (senha.value.length <= 4) {
        alert('Senha deve ter mais de 4 dígitos.')
    }

    if (senha.value === 'senha') {
        alert('Senha não pode ser igual a Senha')
    }

    if (mensagem.length > 0){
         e.preventDefault()
         errorElement.innerText = mensagem.join(', ')
    }
})

