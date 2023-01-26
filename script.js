const cep = document.querySelector('#cep')
const endereco = document.querySelector('#endereco')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')

function preencherForm (dados) {
    endereco.value = dados.logradouro
    bairro.value = dados.bairro
    cidade.value = dados.localidade
    estado.value = dados.uf

}

async function pesquisarCep () {
    const cepValue = cep.value
    const url = `https://viacep.com.br/ws/${cepValue}/json/`
    const promise = await fetch(url)
    const dados = await promise.json()
    preencherForm(dados) 
}

cep.addEventListener('focusout', pesquisarCep)