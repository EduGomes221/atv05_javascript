let n = parseInt(prompt("Quantos números você deseja informar?"));
let numeros = [];
let soma = 0;

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Digite o número " + (i + 1) + ":"));
    numeros.push(num);
    soma += num;
}

let menor = Math.min(...numeros);
let maior = Math.max(...numeros);

alert("Menor valor: " + menor + "\nMaior valor: " + maior + "\nSoma: " + soma);
