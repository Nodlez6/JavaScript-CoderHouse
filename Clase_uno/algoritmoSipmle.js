let numero_uno = prompt("Ingresa un número")
let numero_dos = prompt("Ingresa otro número")

numero_uno = parseInt(numero_uno)
numero_dos = parseInt(numero_dos)

const resultado_suma = numero_uno + numero_dos
const resultado_multiplicacion = numero_uno * numero_dos
const resultado_división = numero_uno / numero_dos
const resultado_resto = numero_uno % numero_dos

console.log("La suma entre " + numero_uno + " y " + numero_dos + " es: " + resultado_suma )
console.log("La multiplicación entre " + numero_uno + " y " + numero_dos + " es: " + resultado_multiplicacion )
console.log("La División entre " + numero_uno + " y " + numero_dos + " es: " + resultado_división)
console.log("El resto entre " + numero_uno + " y " + numero_dos + " es: " + resultado_resto )
