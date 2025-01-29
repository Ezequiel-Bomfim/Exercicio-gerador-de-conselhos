const button = document.getElementById('button')
button.addEventListener('click', gerarConselhoAleatorio)
const tituloDoConselho = document.getElementById('.slipId')

const conselho = document.querySelector('.advice')

async function criarGeradorConselhoAleatorio() {
    try {
        const url = "https://api.adviceslip.com/advice"
        const resposta = await fetch(url)
        return await resposta.json()
    } catch (error) {
        console.log(error)
    }
}

async function geradorDeConselhos(slip_id) {
    try {
        const url = `https://api.adviceslip.com/advice/${slip_id}`
        const resposta = await fetch(url)
        return await resposta.json()
    } catch (error) {
        console.log(error)
    }
}

async function gerarConselhoAleatorio() {
    try {
        const gerarConselhos = await criarGeradorConselhoAleatorio()
        const conselhos = await geradorDeConselhos(gerarConselhos.slip.id)
        conselho.innerText = conselhos.slip.advice
        slipId.innerText = `ADVICE # ${conselhos.slip.id}`
    } catch (error) {
        console.log("Erro ao tentar buscar informaçãoes da API", error)
    }
}