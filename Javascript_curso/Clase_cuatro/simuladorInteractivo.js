

const calculoCuotas = ( monto , cuotas ) => {
    return monto / cuotas
}

const monto = parseInt(prompt("Hola, ingrese el monto"));
const cuotas = parseInt(prompt("Ingrese la cantidad de cuotas a pagar"))

const resultado = calculoCuotas( monto , cuotas );

console.log("Deberás cancelar un monto de: " + resultado + " durante " + cuotas + " meses")

