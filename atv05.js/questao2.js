let pares = 0;
let impares = 0;

for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite um número inteiro:"));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert("Quantidade de pares: " + pares + "\nQuantidade de ímpares: " + impares);
