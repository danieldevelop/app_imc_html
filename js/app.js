function calcularIMC(peso, talla) {
    return (peso / Math.pow(talla, 2)).toFixed(3);
}

function estadoIMC(imc) {
    if (imc >= 18.5 && imc <= 24.9) {
        return "Peso Normal";
    }

    if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    }

    if (imc >= 30 && imc <= 34.9) {
        return "Obesidad grado 1";
    }

    if (imc >= 35 && imc <= 39.9) {
        return "Obesidad grado 2";
    }

    if (imc >= 40) {
        return "Obesidad grado 3";
    }
}

function toDecimal(talla) {
    let altura = talla.split("");
    altura.splice(1, 0, ".");

    return altura.join("");
}

const buscarCaracter = (cadena) => (cadena.includes(".")) ? true : false;




const calcular = document.querySelector('[data-calcular]');
const limpiarCampos = document.querySelector('[data-limpiar]');

limpiarCampos.addEventListener('click', () => { 
    document.getElementById("inpPeso").value = "";
    document.getElementById("inpTalla").value = "";
});


calcular.addEventListener('click', (event) => { 
    event.preventDefault();

    let peso = document.getElementById("inpPeso").value.trim();
    let talla = document.getElementById("inpTalla").value.trim();
    talla = talla.replace(",", ".");
    
    if (talla == "" || peso == "") {
        alert("Debe ingresar peso y/o talla");
        return false;
    }  

    if (talla.length == 3) {
        talla = toDecimal(talla);
    } 

    let imc = calcularIMC(peso, talla);
    let estado = estadoIMC(imc);
    

    document.querySelector('[data-imc]').innerHTML = imc;
    document.querySelector('[data-estado]').innerHTML = estado || "No se pudo calcular el IMC";
});
