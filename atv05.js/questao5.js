function circulo() {
    let raio = parseFloat(prompt("Digite o raio do círculo:"));
    let area = Math.PI * Math.pow(raio, 2);
    let perimetro = 2 * Math.PI * raio;

    alert("Área: " + area.toFixed(2) + "\nPerímetro: " + perimetro.toFixed(2));
}

circulo();
