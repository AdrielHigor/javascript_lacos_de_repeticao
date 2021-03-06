let nomes = ['Adriel', 'Guilherme', 'Nicolas', 'Ulisses']

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

for (let i in nomes) {
    console.log(nomes[i])
}

nomes.forEach((index) => {
    console.log(index)
})