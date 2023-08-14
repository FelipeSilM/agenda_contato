const form = document.querySelector("form")

let lista = ""
const numeros = []

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    adicionarContato()
    atualizaTabela()
})

function adicionarContato(){
    const nome = document.getElementById('nome-contato')
    const numero = document.getElementById('numero-contato')

    if(numeros.includes(numero.value)){
        alert(`numero ja registrado`)
    }else{

        let contato = '<tr>'
        contato += `<td>${nome.value}</td>`
        contato += `<td>${numero.value}</td>`
        contato += '</tr>'
        
        lista += contato
        numeros.push(numero.value)
    }

    nome.value = ''
    numero.value = ''

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = lista
}