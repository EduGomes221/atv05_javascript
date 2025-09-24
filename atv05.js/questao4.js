let salario = 1000;
let ano = 1996;
let percentual = 0.015;

while (ano <= new Date().getFullYear()) {
    salario += salario * percentual;
    percentual *= 2; // dobra a partir de 1997
    ano++;
}

alert("O salário atual é R$ " + salario.toFixed(2));
