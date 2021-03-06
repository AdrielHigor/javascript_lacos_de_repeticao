let pessoas = [
    {
        id: 1,
        nome: 'Adriel',
        idade: 25
    },
    {
        id: 2,
        nome: 'Guilherme',
        idade: 25
    },
    {
        id: 3,
        nome: 'Nicolas',
        idade: 25
    },
    {
        id: 4,
        nome: 'Ulisses',
        idade: 25
    },
]

let i = 0
let busca = 3
let resultado = null

do {
    if (pessoas[i].id == busca){
        resultado = pessoas[i]
        break;
    }
    i++
} while (i < pessoas.length)

console.log(resultado)
